export default function EnquiryForm() {
  return (
    <section className="px-6 py-16 bg-slate-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold mb-6">Enquire Now</h2>
        <p className="text-xs text-amber-600 mb-6 font-medium uppercase tracking-wider">DEMO CONCEPT — NO REAL DATA COLLECTED</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-slate-200 rounded-lg" />
          <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border border-slate-200 rounded-lg" />
          <input type="text" placeholder="Property of Interest" className="w-full px-4 py-2 border border-slate-200 rounded-lg" />
          <input type="text" placeholder="Budget" className="w-full px-4 py-2 border border-slate-200 rounded-lg" />
          <textarea placeholder="Message" className="w-full px-4 py-2 border border-slate-200 rounded-lg" rows={4}></textarea>
          <button type="button" className="w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            Submit Enquiry (Demo)
          </button>
        </form>
      </div>
    </section>
  );
}
