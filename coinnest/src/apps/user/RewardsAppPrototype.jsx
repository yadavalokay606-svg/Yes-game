import React from 'react';
import Card from '../../components/Card';
import mock from '../../data/mockData';

export default function RewardsAppPrototype(){
  const user = mock.user;
  const tasks = mock.tasks;

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">CoinNest — Rewards</h1>
        <div className="text-right">
          <div className="text-sm text-slate-500">Coins</div>
          <div className="text-xl font-semibold">{user.coins}</div>
        </div>
      </header>

      <main className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <Card title="Today's Tasks">
            <ul className="space-y-3">
              {tasks.map(t => (
                <li key={t.id} className="p-3 border rounded-md bg-white">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{t.title}</div>
                      <div className="text-sm text-slate-500">{t.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-yellow-600">+{t.reward} coins</div>
                      <button className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded text-sm">Open</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <aside>
          <Card title="Wallet">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Available</span>
                <strong>{user.coins}</strong>
              </div>
              <div className="flex justify-between text-sm">
                <span>Pending</span>
                <span className="text-slate-500">{user.pending}</span>
              </div>
              <div className="mt-3">
                <button className="w-full px-3 py-2 bg-amber-500 text-white rounded">Redeem</button>
              </div>
            </div>
          </Card>

          <div className="mt-4">
            <Card title="Trending Campaigns">
              <div className="text-sm text-slate-600">No trending campaigns in this prototype.</div>
            </Card>
          </div>
        </aside>
      </main>
    </div>
  );
}
