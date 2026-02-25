import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from './types';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen setScreen={setCurrentScreen} />;
      case 'services':
        return <ServicesScreen setScreen={setCurrentScreen} />;
      case 'upload':
        return <UploadScreen setScreen={setCurrentScreen} />;
      case 'history':
        return <HistoryScreen setScreen={setCurrentScreen} />;
      case 'profile':
        return <ProfileScreen setScreen={setCurrentScreen} />;
      case 'agent-profile':
        return <AgentProfileScreen setScreen={setCurrentScreen} />;
      case 'settings':
        return <SettingsScreen setScreen={setCurrentScreen} />;
      case 'cash-counter':
        return <CashCounterScreen setScreen={setCurrentScreen} />;
      default:
        return <HomeScreen setScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="relative w-full max-w-[480px] bg-white shadow-2xl min-h-screen flex flex-col overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
        {['home', 'services', 'history', 'profile'].includes(currentScreen) && (
          <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />
        )}
      </div>
    </div>
  );
}

function HomeScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <>
      <header className="flex items-center bg-white p-4 border-b border-primary/10 justify-between sticky top-0 z-10">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined">account_balance</span>
        </div>
        <div className="flex-1 px-3">
          <h1 className="text-slate-900 text-base font-bold leading-tight">Bank of Baroda</h1>
          <p className="text-primary text-xs font-semibold uppercase tracking-wider">Mini Branch</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/5 text-primary">
            <span className="material-symbols-outlined">translate</span>
          </button>
        </div>
      </header>

      <div className="px-4 py-4">
        <div 
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 rounded-xl min-h-[200px] relative group cursor-pointer"
          style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://picsum.photos/seed/bank/800/400")' }}
          onClick={() => setScreen('agent-profile')}
        >
          <div className="flex flex-col p-4">
            <span className="text-primary bg-white/90 self-start px-2 py-1 rounded text-[10px] font-bold mb-2 tracking-widest uppercase">Verified BC Agent</span>
            <h2 className="text-white text-2xl font-bold leading-tight">Branch at Chadachan</h2>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <div 
          className="flex w-full flex-col gap-4 items-start bg-primary/5 p-4 rounded-xl border border-primary/10 cursor-pointer"
          onClick={() => setScreen('agent-profile')}
        >
          <div className="flex gap-4 items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-primary shadow-md"
              style={{ backgroundImage: 'url("https://picsum.photos/seed/agent/200/200")' }}
            ></div>
            <div className="flex flex-col">
              <p className="text-slate-900 text-xl font-extrabold leading-tight">Prakash IRAMANI</p>
              <p className="text-primary text-sm font-bold uppercase tracking-wide">BC Banking Agent</p>
            </div>
          </div>
          <div className="space-y-2 border-t border-primary/10 pt-3 w-full">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
              <p className="text-slate-600 text-sm font-medium leading-tight">Near APMC Car Parking, Opposite Bank of Baroda, Chadachan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-6 pb-2">
        <h3 className="text-slate-900 text-lg font-bold leading-tight mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">contact_support</span>
          Quick Support / ಸಂಪರ್ಕಿಸಿ
        </h3>
        <div className="grid grid-cols-1 gap-3">
          <a className="flex items-center justify-between bg-primary p-4 rounded-xl text-white shadow-lg active:scale-95 transition-transform" href="tel:6361639923">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs opacity-90">Call Now / ಕರೆ ಮಾಡಿ</span>
                <span className="font-bold text-lg">63616 39923</span>
              </div>
            </div>
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
          <button 
            onClick={() => setScreen('cash-counter')}
            className="flex items-center justify-between bg-white border-2 border-primary/20 p-4 rounded-xl text-slate-800 active:scale-95 transition-transform text-left"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-semibold">Cash Counter</span>
                <span className="font-bold text-lg">Manage Cash</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-primary">chevron_right</span>
          </button>
          <a className="flex items-center justify-between bg-[#25D366]/10 border border-[#25D366]/30 p-4 rounded-xl text-[#075e54] active:scale-95 transition-transform" href="#">
            <div className="flex items-center gap-3">
              <div className="bg-[#25D366] text-white p-2 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.891 11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.735-.981z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold tracking-tight">WhatsApp Us</span>
                <span className="font-bold text-lg">Chat with Agent</span>
              </div>
            </div>
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>

      <div className="px-4 py-6">
        <h3 className="text-slate-900 text-lg font-bold leading-tight mb-1">Banking Services / ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು</h3>
        <p className="text-slate-500 text-xs mb-4">Basic banking operations and account management</p>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { icon: 'payments', label: 'Cash Deposit', labelKn: 'ನಗದು ಠೇವಣಿ' },
            { icon: 'atm', label: 'Withdrawal', labelKn: 'ನಗದು ಹಿಂಪಡೆಯುವಿಕೆ' },
            { icon: 'account_balance_wallet', label: 'Balance', labelKn: 'ಬ್ಯಾಲೆನ್ಸ್ ವಿಚಾರಣೆ' },
            { icon: 'history_edu', label: 'Mini Statement', labelKn: 'ಮಿನಿ ಸ್ಟೇಟ್ಮೆಂಟ್' },
            { icon: 'person_add', label: 'New Account', labelKn: 'ಹೊಸ ಖಾತೆ' },
            { icon: 'send_money', label: 'Fund Transfer', labelKn: 'ಹಣ ವರ್ಗಾವಣೆ' },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-3 rounded-xl border border-primary/10 shadow-sm flex flex-col items-center text-center cursor-pointer active:scale-95 transition-transform" onClick={() => setScreen('services')}>
              <div className="bg-primary/10 p-2 rounded-full mb-2">
                <span className="material-symbols-outlined text-primary text-xl">{service.icon}</span>
              </div>
              <span className="text-[10px] font-bold">{service.label}</span>
              <span className="text-[8px] text-slate-500">{service.labelKn}</span>
            </div>
          ))}
        </div>

        <h3 className="text-slate-900 text-lg font-bold leading-tight mb-1">Loan Services / ಸಾಲದ ಸೇವೆಗಳು</h3>
        <p className="text-slate-500 text-xs mb-4">Apply for various loan schemes</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer active:scale-95 transition-transform" onClick={() => setScreen('services')}>
            <span className="material-symbols-outlined text-primary">agriculture</span>
            <div>
              <p className="text-xs font-bold">Agriculture Loan</p>
              <p className="text-[10px] text-slate-500">ಕೃಷಿ ಸಾಲ</p>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer active:scale-95 transition-transform" onClick={() => setScreen('services')}>
            <span className="material-symbols-outlined text-primary">storefront</span>
            <div>
              <p className="text-xs font-bold">Mudra Loan</p>
              <p className="text-[10px] text-slate-500">ಮುದ್ರಾ ಸಾಲ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}

function ServicesScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  const services = [
    { id: '1', icon: 'person_add', title: 'New Account Opening', titleKn: 'ಹೊಸ ಖಾತೆ ತೆರೆಯುವುದು', desc: 'Open savings/current accounts' },
    { id: '2', icon: 'payments', title: 'Money Transfer', titleKn: 'ಹಣ ವರ್ಗಾವಣೆ', desc: 'Instant Domestic Money Transfer' },
    { id: '3', icon: 'fingerprint', title: 'AEPS Cash Withdrawal', titleKn: 'ಹಣ ಹಿಂಪಡೆಯುವುದು', desc: 'Withdraw using Aadhaar' },
    { id: '4', icon: 'link', title: 'Aadhaar Seeding', titleKn: 'ಆಧಾರ್ ಸೀಡಿಂಗ್', desc: 'Link Aadhaar with Bank Account' },
    { id: '5', icon: 'savings', title: 'Gold Loan', titleKn: 'ಚಿನ್ನದ ಸಾಲ', desc: 'Apply for Gold Loan' },
    { id: '6', icon: 'shield_with_heart', title: 'Insurance / Pension', titleKn: 'ವಿಮೆ / ಪಿಂಚಣಿ', desc: 'PMJJBY, PMSBY, and APY schemes' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-100">
        <div className="flex items-center p-4 gap-3">
          <button onClick={() => setScreen('home')} className="p-2 hover:bg-slate-100 rounded-full cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-slate-700">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h2 className="text-lg font-extrabold leading-tight tracking-tight text-primary">Prakash IRAMANI</h2>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">BC Banking Partner</p>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
            Select Service / <span className="text-primary">ಸೇವೆಗಳ ಆಯ್ಕೆ</span>
          </h1>
          <p className="text-sm text-slate-500 mt-2">Choose a service to proceed with documentation</p>
        </div>

        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.id} className="group flex flex-col gap-3 p-4 rounded-xl border border-slate-100 bg-white hover:border-primary/50 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 size-12">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <p className="text-base font-bold text-slate-800 leading-snug">{s.title} / {s.titleKn}</p>
                  <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
                </div>
              </div>
              <button 
                onClick={() => setScreen('upload')}
                className="w-full mt-2 flex items-center justify-center gap-2 rounded-lg py-2.5 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 active:scale-[0.98] transition-transform"
              >
                <span className="material-symbols-outlined text-sm">cloud_upload</span>
                <span>Click to Upload Docs</span>
              </button>
            </div>
          ))}
        </div>
        <div className="h-24"></div>
      </main>
    </div>
  );
}

function UploadScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <header className="flex items-center bg-white p-4 border-b border-primary/10 sticky top-0 z-10">
        <button onClick={() => setScreen('services')} className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <div className="ml-4">
          <h1 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">
            Document Upload / ದಾಖಲೆ ಅಪ್‌ಲೋಡ್
          </h1>
          <p className="text-primary text-xs font-semibold uppercase tracking-wider">Banking Services / ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳು</p>
        </div>
      </header>

      <main className="flex-1 w-full p-4 space-y-6">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-primary/5">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">person</span>
            <h2 className="text-slate-900 text-lg font-bold leading-tight">
              Customer Details / ಗ್ರಾಹಕರ ವಿವರಗಳು
            </h2>
          </div>
          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-semibold">
                Customer Name / ಗ್ರಾಹಕರ ಹೆಸರು
              </label>
              <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary h-12 px-4 text-base border" placeholder="Enter full name / ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-semibold">
                Phone Number / ಫೋನ್ ಸಂಖ್ಯೆ
              </label>
              <div className="relative">
                <input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary h-12 pl-4 pr-12 text-base border" placeholder="10-digit mobile number" type="tel" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined">call</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-primary/5">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">upload_file</span>
            <h2 className="text-slate-900 text-lg font-bold leading-tight">
              Upload Document / ದಾಖಲೆ ಅಪ್‌ಲೋಡ್
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-primary/30 rounded-xl p-8 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
            <div className="bg-primary/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
            </div>
            <p className="text-slate-900 font-bold text-center">
              Click to upload or drag and drop
            </p>
            <p className="text-slate-500 text-sm text-center mt-1">
              PDF, JPG or PNG (Max 5MB)
            </p>
            <p className="text-primary text-xs font-medium mt-4">
              ಚಿತ್ರ ಅಥವಾ PDF ಆಯ್ಕೆ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ
            </p>
            <input accept=".pdf,image/*" className="hidden" type="file" />
          </div>
        </section>

        <div className="pt-4 pb-10">
          <button 
            onClick={() => setScreen('history')}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex flex-col items-center justify-center transition-all active:scale-[0.98]"
          >
            <span className="text-lg">Raise Application</span>
            <span className="text-sm font-normal opacity-90">ಅರ್ಜಿ ಸಲ್ಲಿಸಿ</span>
          </button>
          <p className="text-center text-slate-400 text-xs mt-4">
            By clicking submit, you agree to our terms and conditions.
          </p>
        </div>
      </main>
    </div>
  );
}

function HistoryScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  const items = [
    { title: 'New Account Opening', titleKn: 'ಹೊಸ ಖಾತೆ ಪ್ರಾರಂಭ', status: 'Pending', date: '24 Oct 2023', statusKn: 'ಬಾಕಿ', icon: 'person_add', color: 'amber' },
    { title: 'Money Transfer', titleKn: 'ಹಣ ವರ್ಗಾವಣೆ', status: 'Completed', date: '22 Oct 2023', statusKn: 'ಯಶಸ್ವಿ', icon: 'payments', color: 'green' },
    { title: 'Debit Card Reissue', titleKn: 'ಡೆಬಿಟ್ ಕಾರ್ಡ್ ಮರು ವಿತರಣೆ', status: 'In Progress', date: '20 Oct 2023', statusKn: 'ಪ್ರಗತಿಯಲ್ಲಿದೆ', icon: 'credit_card', color: 'blue' },
    { title: 'Home Loan Application', titleKn: 'ಗೃಹ ಸಾಲದ ಅರ್ಜಿ', status: 'Rejected', date: '15 Oct 2023', statusKn: 'ತಿರಸ್ಕರಿಸಲಾಗಿದೆ', icon: 'description', color: 'red' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <header className="flex items-center bg-white p-4 pb-2 justify-between sticky top-0 z-10 border-b border-primary/10">
        <button onClick={() => setScreen('home')} className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex-1 text-center">
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Status & History</h2>
          <p className="text-xs text-slate-500 font-medium">ಸ್ಥಿತಿ ಮತ್ತು ಇತಿಹಾಸ</p>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 items-center justify-center rounded-full text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <div className="bg-white">
        <div className="flex border-b border-slate-100 px-4">
          <div className="flex flex-1 flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4">
            <p className="text-sm font-bold">Applications</p>
            <p className="text-[10px] font-medium">ಅರ್ಜಿಗಳು</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 pt-4">
            <p className="text-sm font-bold">Transactions</p>
            <p className="text-[10px] font-medium">ವಹಿವಾಟುಗಳು</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar">
        <span className="px-4 py-1.5 bg-primary text-white rounded-full text-xs font-semibold whitespace-nowrap">All / ಎಲ್ಲಾ</span>
        <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold whitespace-nowrap border border-primary/20">Pending / ಬಾಕಿ</span>
        <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold whitespace-nowrap border border-primary/20">Completed / ಮುಗಿದಿದೆ</span>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-slate-900 text-base font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">history</span>
          Recent Status / ಇತ್ತೀಚಿನ ಸ್ಥಿತಿ
        </h3>
      </div>

      <div className="flex flex-col gap-1 p-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 ${
              item.color === 'amber' ? 'bg-amber-100 text-amber-600' :
              item.color === 'green' ? 'bg-green-100 text-green-600' :
              item.color === 'blue' ? 'bg-blue-100 text-blue-600' :
              'bg-red-100 text-red-600'
            }`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-slate-900 text-sm font-bold leading-tight">{item.title}</p>
              <p className="text-slate-500 text-[11px] font-medium">{item.titleKn}</p>
              <p className={`text-[10px] font-bold mt-1 uppercase tracking-wider ${
                item.color === 'amber' ? 'text-amber-600' :
                item.color === 'green' ? 'text-green-600' :
                item.color === 'blue' ? 'text-blue-600' :
                'text-red-600'
              }`}>
                {item.status} - {item.date} / {item.statusKn}
              </p>
            </div>
            <div className="shrink-0">
              {item.color === 'amber' ? (
                <div className="size-2 rounded-full bg-amber-500 animate-pulse"></div>
              ) : (
                <span className="material-symbols-outlined text-lg">
                  {item.color === 'green' ? 'check_circle' : item.color === 'blue' ? 'sync' : 'cancel'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto px-4 mb-24">
        <div className="p-4 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs opacity-90 font-medium">Monthly Summary / ಮಾಸಿಕ ಸಾರಾಂಶ</p>
              <h4 className="text-lg font-bold">4 Requests Processed</h4>
            </div>
            <span className="material-symbols-outlined text-3xl opacity-50">analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <header className="flex items-center bg-white p-4 pb-2 justify-between border-b border-slate-100 sticky top-0 z-10">
        <button onClick={() => setScreen('home')} className="text-slate-900 flex size-10 shrink-0 items-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex-1 text-center">
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">User Profile</h2>
          <p className="text-slate-500 text-xs font-medium">ಬಳಕೆದಾರರ ವಿವರ</p>
        </div>
        <button onClick={() => setScreen('settings')} className="flex cursor-pointer items-center justify-end w-10">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="flex p-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="relative">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-4 border-white shadow-md"
              style={{ backgroundImage: 'url("https://picsum.photos/seed/user/300/300")' }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white cursor-pointer">
              <span className="material-symbols-outlined text-sm">edit</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-slate-900 text-2xl font-extrabold leading-tight text-center">Sandeep Kumar</p>
            <p className="text-slate-500 text-sm font-medium text-center">Cust ID: 987654321</p>
          </div>
          <button className="flex min-w-[160px] items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform">
            <span>Edit Profile / ಪ್ರೊಫೈಲ್ ತಿದ್ದಿ</span>
          </button>
        </div>
      </div>

      <div className="px-4 pt-6 pb-2 flex items-center justify-between">
        <h3 className="text-slate-900 text-md font-bold uppercase tracking-wider">Personal Details</h3>
        <span className="material-symbols-outlined text-primary text-xl">person</span>
      </div>
      <div className="mx-4 mb-6 space-y-1 bg-white rounded-xl p-2 border border-slate-100">
        {[
          { label: 'Full Name', val: 'Sandeep Kumar', kn: 'ಸಂದೀಪ್ ಕುಮಾರ್' },
          { label: 'Date of Birth', val: '15 May 1988', kn: '೧೫ ಮೇ ೧೯೮೮' },
          { label: 'PAN Card', val: 'ABCDE1234F', kn: '', verified: true },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 px-3 py-3 border-b border-slate-100 last:border-0">
            <div className="flex-1">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{item.label}</p>
              <div className="flex items-center gap-2">
                <p className="text-slate-900 text-base font-semibold">{item.val}</p>
                {item.verified && <span className="material-symbols-outlined text-green-500 text-sm">verified</span>}
              </div>
              {item.kn && <p className="text-slate-500 text-xs font-medium">{item.kn}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pt-2 pb-2 flex items-center justify-between">
        <h3 className="text-slate-900 text-md font-bold uppercase tracking-wider">Linked Accounts</h3>
        <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
      </div>
      <div className="px-4 pb-24 space-y-3">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <div className="flex-1">
            <p className="text-slate-900 font-bold">Savings Account</p>
            <p className="text-slate-500 text-xs">A/C: XXXX XXXX 4567</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-extrabold">₹ 45,230.00</p>
            <p className="text-[10px] text-slate-400 font-bold">PRIMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentProfileScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <header className="flex items-center bg-white p-4 sticky top-0 z-10 border-b border-slate-200 justify-between">
        <button onClick={() => setScreen('home')} className="text-slate-900 flex size-10 shrink-0 items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">Agent Profile</h2>
        <div className="flex w-10 items-center justify-end">
          <span className="material-symbols-outlined">share</span>
        </div>
      </header>

      <div className="flex p-6 bg-white border-b border-slate-100">
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div className="relative">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20"
                style={{ backgroundImage: 'url("https://picsum.photos/seed/agent/300/300")' }}
              ></div>
              <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-white">
                <span className="material-symbols-outlined text-sm flex items-center justify-center">verified</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-slate-900 text-2xl font-bold leading-tight tracking-tight text-center">Prakash IRAMANI</p>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider text-center mt-1">Bank of Baroda Mini Branch Agent</p>
              <div className="flex items-center gap-1 mt-2 bg-primary/10 px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-primary text-xs">handshake</span>
                <p className="text-primary text-sm font-medium">Trusted Banking Partner</p>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3">
            <a className="flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-slate-100 text-slate-900 text-sm font-bold flex-1" href="tel:6361639923">
              <span className="material-symbols-outlined">call</span>
              <span>Call Agent</span>
            </a>
            <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-4 bg-primary text-white text-sm font-bold flex-1">
              <span className="material-symbols-outlined">chat</span>
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-4 p-4 no-scrollbar">
        {[
          { icon: 'work_history', label: 'Experience', val: '8+ Years' },
          { icon: 'groups', label: 'Customers', val: '1,000+' },
          { icon: 'star', label: 'Rating', val: '4.9 / 5' },
        ].map((stat, idx) => (
          <div key={idx} className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-xl p-4 bg-white shadow-sm border border-slate-100">
            <span className="material-symbols-outlined text-primary">{stat.icon}</span>
            <p className="text-slate-500 text-xs font-medium uppercase">{stat.label}</p>
            <p className="text-slate-900 text-xl font-bold">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="px-4 py-2">
        <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight mb-4">Branch Details</h3>
        <div className="flex flex-col gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          {[
            { icon: 'location_on', label: 'Address', val: 'Near APMC Car Parking, Opposite Bank of Baroda, Chadachan' },
            { icon: 'phone_iphone', label: 'Direct Contacts', val: '6361639923, 9591426100' },
            { icon: 'schedule', label: 'Service Hours', val: 'Mon - Sat: 9:30 AM to 6:30 PM' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <p className="text-slate-500 text-sm">{item.label}</p>
                <p className="text-slate-900 font-medium">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="w-full h-40 bg-slate-200 rounded-xl overflow-hidden relative border border-slate-100 shadow-sm">
          <div className="absolute inset-0 flex items-center justify-center">
            <img className="w-full h-full object-cover opacity-50" src="https://picsum.photos/seed/map/800/400" alt="Map" />
            <div className="absolute flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-4xl fill-1">location_on</span>
              <p className="text-slate-900 font-bold bg-white/80 px-2 py-1 rounded text-xs mt-1">Open in Maps</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

function SettingsScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <header className="sticky top-0 z-10 bg-white border-b border-primary/10 px-4 py-4 flex items-center gap-4">
        <button onClick={() => setScreen('profile')} className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div>
          <h1 className="text-xl font-bold leading-tight">Settings / ಸಂಯೋಜನೆಗಳು</h1>
          <p className="text-xs text-slate-500">Prakash IRAMANI BC Banking</p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-8">
        <section>
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Language / ಭಾಷೆ</h2>
          <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">language</span>
                <div>
                  <p className="font-semibold text-base">Select Language</p>
                  <p className="text-sm text-slate-500">English / ಕನ್ನಡ</p>
                </div>
              </div>
              <button className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">Change</button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Notifications</h2>
          <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
            {[
              { icon: 'notifications_active', label: 'App Notifications', kn: 'ಅಪ್ಲಿಕೇಶನ್ ಅಧಿಸೂಚನೆಗಳು', checked: true },
              { icon: 'mail', label: 'Email Alerts', kn: 'ಇಮೇಲ್ ಎಚ್ಚರಿಕೆಗಳು', checked: false },
              { icon: 'sms', label: 'SMS Alerts', kn: 'ಎಸ್ಎಮ್ಎಸ್ ಎಚ್ಚರಿಕೆಗಳು', checked: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-primary/5 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-base">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.kn}</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${item.checked ? 'bg-primary' : 'bg-slate-200'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${item.checked ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Security</h2>
          <div className="bg-white rounded-xl border border-primary/10 overflow-hidden shadow-sm">
            {[
              { icon: 'lock', label: 'Change MPIN', kn: 'MPIN ಬದಲಾಯಿಸಿ' },
              { icon: 'fingerprint', label: 'Biometric Login', kn: 'ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಗಿನ್' },
              { icon: 'devices', label: 'Manage Devices', kn: 'ಸಾಧನಗಳನ್ನು ನಿರ್ವಹಿಸಿ' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border-b border-primary/5 last:border-0 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-base">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.kn}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </div>
            ))}
          </div>
        </section>

        <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-white shadow-lg">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1">Secure Banking</h3>
            <p className="text-sm opacity-90">Always log out after use and never share your OTP or MPIN with anyone.</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <span className="material-symbols-outlined text-[100px]">shield_person</span>
          </div>
        </div>
      </main>
    </div>
  );
}

function CashCounterScreen({ setScreen }: { setScreen: (s: Screen) => void }) {
  return (
    <div className="flex-1 flex flex-col bg-background-light">
      <header className="sticky top-0 z-10 bg-white border-b border-primary/10 px-4 py-4 flex items-center gap-4">
        <button onClick={() => setScreen('home')} className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <div className="flex flex-col">
          <h1 className="text-lg font-extrabold leading-tight">Cash Counter</h1>
          <p className="text-sm font-medium text-primary leading-tight">ನಗದು ಕೌಂಟರ್</p>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="relative overflow-hidden bg-primary rounded-xl p-6 shadow-lg shadow-primary/20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 opacity-90">
              <span className="material-symbols-outlined text-white text-sm">account_balance_wallet</span>
              <p className="text-white text-sm font-medium">Cash in Hand / ನಿಮ್ಮಲ್ಲಿರುವ ನಗದು</p>
            </div>
            <p className="text-white text-3xl font-extrabold mt-2 tracking-tight">₹45,250.00</p>
            <div className="mt-4 flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full">
              <div className="size-2 rounded-full bg-green-400"></div>
              <p className="text-white text-xs font-semibold">Active Session / ಸಕ್ರಿಯ ಸೆಶನ್</p>
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-base font-bold mb-4">Quick Actions / ತ್ವರಿತ ಕ್ರಿಯೆಗಳು</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: 'payments', label: 'Cash Deposit', kn: 'ನಗದು ಜಮೆ' },
              { icon: 'atm', label: 'Cash Withdrawal', kn: 'ನಗದು ಹಿಂಪಡೆಯುವಿಕೆ' },
              { icon: 'account_balance', label: 'Balance Enquiry', kn: 'ಬ್ಯಾಲೆನ್ಸ್ ವಿಚಾರಣೆ' },
            ].map((action, idx) => (
              <button key={idx} className="group flex items-center gap-4 p-4 bg-white border border-primary/10 rounded-xl hover:border-primary transition-all text-left">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{action.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold">{action.label}</p>
                  <p className="text-xs text-slate-500 font-medium">{action.kn}</p>
                </div>
                <span className="material-symbols-outlined text-primary/40 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold">Daily Summary / ದೈನಂದಿನ ಸಾರಾಂಶ</h3>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Today</span>
          </div>
          <div className="bg-white border border-primary/10 rounded-xl p-4 space-y-4">
            {[
              { icon: 'trending_up', label: 'Total Deposits', kn: 'ಒಟ್ಟು ಜಮೆ', val: '+ ₹1,12,000', color: 'text-green-600', bg: 'bg-green-100' },
              { icon: 'trending_down', label: 'Total Withdrawals', kn: 'ಒಟ್ಟು ಹಿಂಪಡೆಯುವಿಕೆ', val: '- ₹66,750', color: 'text-red-600', bg: 'bg-red-100' },
              { icon: 'swap_vert', label: 'Net Cash Flow', kn: 'ನಿವ್ವಳ ನಗದು ಹರಿವು', val: '₹45,250', color: 'text-primary', bg: 'bg-primary/10', bold: true },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center justify-between ${idx < 2 ? 'border-b border-primary/5 pb-3' : 'pt-1'}`}>
                <div className="flex items-center gap-3">
                  <div className={`size-8 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                    <span className="material-symbols-outlined text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{item.kn}</p>
                  </div>
                </div>
                <p className={`text-base font-bold ${item.color} ${item.bold ? 'text-lg font-extrabold' : ''}`}>{item.val}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
