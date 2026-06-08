import { useEffect, useState } from 'react'
import API from '../api/api'
import Navbar from '../components/Navbar'

export default function Pembayaran() {
  const [pembayaran, setPembayaran] = useState([])
  const [penguni, setPenguni] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    penguniId: '',
    nominal: '',
    bulanTahun: '',
    metode: 'cash',
    keterangan: ''
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [pembayaranRes, penguniRes] = await Promise.all([
        API.get('/pembayaran'),
        API.get('/penghuni')
      ])
      setPembayaran(pembayaranRes.data.data)
      setPenguni(penguniRes.data.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await API.post('/pembayaran', formData)
      fetchData()
      setShowForm(false)
      setFormData({
        penguniId: '',
        nominal: '',
        bulanTahun: '',
        metode: 'cash',
        keterangan: ''
      })
    } catch (error) {
      console.error('Error adding pembayaran:', error)
    }
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Pencatatan Pembayaran</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            {showForm ? 'Batal' : '+ Catat Pembayaran'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <select
                value={formData.penguniId}
                onChange={(e) => setFormData({...formData, penguniId: e.target.value})}
                className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Pilih Penghuni</option>
                {penguni.map((p) => (
                  <option key={p.id} value={p.id}>{p.nama} - {p.noKamar}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Nominal"
                value={formData.nominal}
                onChange={(e) => setFormData({...formData, nominal: e.target.value})}
                className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="month"
                value={formData.bulanTahun}
                onChange={(e) => setFormData({...formData, bulanTahun: e.target.value})}
                className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <select
                value={formData.metode}
                onChange={(e) => setFormData({...formData, metode: e.target.value})}
                className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="cash">Cash</option>
                <option value="transfer">Transfer</option>
                <option value="e-wallet">E-Wallet</option>
              </select>
              <input
                type="text"
                placeholder="Keterangan"
                value={formData.keterangan}
                onChange={(e) => setFormData({...formData, keterangan: e.target.value})}
                className="col-span-2 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="col-span-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Simpan
              </button>
            </form>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">Penghuni</th>
                <th className="px-6 py-3 text-left">Nominal</th>
                <th className="px-6 py-3 text-left">Bulan</th>
                <th className="px-6 py-3 text-left">Metode</th>
                <th className="px-6 py-3 text-left">Tanggal Bayar</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {pembayaran.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{p.penghuni?.nama}</td>
                  <td className="px-6 py-4">Rp {p.nominal.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-4">{new Date(p.bulanTahun).toLocaleDateString('id-ID', {year: 'numeric', month: 'long'})}</td>
                  <td className="px-6 py-4">{p.metode}</td>
                  <td className="px-6 py-4">{new Date(p.tanggalBayar).toLocaleDateString('id-ID')}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-white text-sm bg-green-500">
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
