import React from 'react';
import Card from '../../components/Card';
import mock from '../../data/mockData';

export default function AdminPanelPrototype(){
  const brands = mock.brands;

  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">CoinNest — Admin</h1>
      </header>

      <main className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <Card title="Overview">
            <div className="text-sm text-slate-600">KPIs and verification trends would appear here.</div>
          </Card>

          <Card title="Campaign Approval Queue" className="mt-4">
            <div className="text-sm text-slate-600">No campaigns in queue (mock data).</div>
          </Card>
        </section>

        <aside>
          <Card title="Brands">
            <ul className="space-y-2">
              {brands.map(b => (
                <li key={b.id} className="p-2 bg-white rounded border">{b.name}</li>
              ))}
            </ul>
          </Card>
        </aside>
      </main>
    </div>
  );
}
