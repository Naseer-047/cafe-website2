import { useState, useEffect, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Flame, ArrowRight, Truck, Clock, ShieldCheck, MapPin, Search } from 'lucide-react';

type Step = 'phone' | 'otp' | 'name' | 'location';

export default function LoginPage() {
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  
  // OTP state (6 digits)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(30);

  // New User Info
  const [firstName, setFirstName] = useState('');
  const [addressSearch, setAddressSearch] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  // OTP Timer Logic
  useEffect(() => {
    let interval: any;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneContinue = () => {
    if (phone.length >= 10) {
      setStep('otp');
      setTimer(30);
      setOtp(['', '', '', '', '', '']);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^[0-9]*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value !== '' && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      // Mock Check: If phone is exactly 1234567890 -> Existing User -> Home
      // Else -> New User -> Name Step
      if (phone === '1234567890') {
        login();
        navigate('/menu');
      } else {
        setStep('name');
      }
    }
  };

  const handleNameContinue = () => {
    if (firstName.trim().length > 1) {
      setStep('location');
    }
  };

  const handleLocationComplete = () => {
    login();
    navigate('/menu');
  };

  const formVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen h-[100vh] bg-[#050505] font-inter overflow-hidden relative">
      
      {/* LEFT SIDE - Branding & Image */}
      <div className="relative flex-1 hidden lg:flex flex-col items-center justify-center p-12 overflow-hidden border-r border-[rgba(255,255,255,0.05)]">
        
        {/* Subtle Background Doodles */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-screen"
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-scales.png")' }}>
        </div>

        {/* Orange Splatter Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-60 pointer-events-none mix-blend-screen"
             style={{
               background: 'radial-gradient(circle, rgba(241,90,36,0.25) 0%, rgba(241,90,36,0) 60%)',
               filter: 'blur(40px)'
             }}
        />

        {/* Top Left Logo */}
        <div className="absolute top-8 left-12 z-20">
          <a href="/" className="flex flex-col items-start leading-none">
            <span className="font-bebas text-[42px] tracking-wider text-[var(--color-brand-yellow)]">
              MA'ONO
            </span>
            <span className="font-bebas text-[18px] tracking-[0.2em] text-white -mt-2">
              FRIED CHICKEN
            </span>
          </a>
        </div>

        {/* Main Composition */}
        <motion.div 
          className="relative z-10 w-full max-w-[800px] flex items-center justify-center mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src="/combo for cart section.png" 
            alt="Ma'ono Combo" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-110 origin-center"
            onError={(e) => { e.currentTarget.src = "/burger.png"; }}
          />
        </motion.div>

        {/* Bottom Features List */}
        <div className="absolute bottom-12 left-0 w-full px-12 z-20 flex items-center justify-center gap-12">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[var(--color-brand-yellow)] flex items-center justify-center text-[var(--color-brand-yellow)]">
              <Truck size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[18px] leading-none">FAST DELIVERY</span>
              <span className="text-[#A8A8A8] text-[13px]">At your doorstep</span>
            </div>
          </div>
          
          <div className="h-10 w-[1px] bg-[rgba(255,255,255,0.1)]"></div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[var(--color-brand-yellow)] flex items-center justify-center text-[var(--color-brand-yellow)]">
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[18px] leading-none">MADE FRESH</span>
              <span className="text-[#A8A8A8] text-[13px]">Every single day</span>
            </div>
          </div>

          <div className="h-10 w-[1px] bg-[rgba(255,255,255,0.1)]"></div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[var(--color-brand-yellow)] flex items-center justify-center text-[var(--color-brand-yellow)]">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-white tracking-wider text-[18px] leading-none">100% QUALITY</span>
              <span className="text-[#A8A8A8] text-[13px]">Premium ingredients</span>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE - Login Panel */}
      <div className="w-full lg:w-[45%] xl:w-[40%] min-h-screen flex items-center justify-center p-6 sm:p-12 z-20 relative bg-[#080808]">
        
        {/* Mobile Logo fallback */}
        <div className="absolute top-8 left-6 lg:hidden z-20">
          <a href="/" className="flex flex-col items-start leading-none">
            <span className="font-bebas text-[32px] tracking-wider text-[var(--color-brand-yellow)]">MA'ONO</span>
          </a>
        </div>

        <motion.div 
          className="w-full max-w-[500px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Form Header (Changes based on step) */}
          <div className="text-[#F15A24] mb-4">
            <Flame size={48} strokeWidth={2} className="drop-shadow-[0_0_15px_rgba(241,90,36,0.5)]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step === 'phone' ? 'title-in' : step === 'otp' ? 'title-otp' : step === 'name' ? 'title-name' : 'title-loc'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-bebas text-[54px] sm:text-[64px] tracking-widest leading-none mb-3 uppercase text-center flex gap-3">
                {step === 'phone' && <><span className="text-white">SIGN</span><span className="text-[var(--color-brand-yellow)]">IN</span></>}
                {step === 'otp' && <><span className="text-white">VERIFY</span><span className="text-[var(--color-brand-yellow)]">OTP</span></>}
                {step === 'name' && <><span className="text-white">Welcome</span><span className="text-[var(--color-brand-yellow)]">👋</span></>}
                {step === 'location' && <><span className="text-white">YOUR</span><span className="text-[var(--color-brand-yellow)]">LOCATION</span></>}
              </h1>
              
              <p className="text-[#A8A8A8] text-[15px] text-center mb-10 min-h-[44px]">
                {step === 'phone' && 'Welcome back! Please sign in to continue.'}
                {step === 'otp' && `We've sent a 6-digit code to +91 ${phone}`}
                {step === 'name' && 'Awesome, you are verified. What is your first name?'}
                {step === 'location' && 'Where should we deliver your hot & fresh chicken?'}
              </p>
            </motion.div>
          </AnimatePresence>
          

          {/* Form Content Area */}
          <div 
            className="w-full flex flex-col gap-8 relative overflow-hidden transition-[min-height] duration-300 ease-in-out" 
            style={{ 
              minHeight: 
                step === 'phone' ? '170px' : 
                step === 'otp' ? '260px' : 
                step === 'name' ? '170px' : '280px' 
            }}
          >
            <AnimatePresence mode="wait">
              
              {/* STEP 1: PHONE */}
              {step === 'phone' && (
                <motion.div 
                  key="phone-step"
                  variants={formVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}
                  className="w-full flex flex-col gap-6 absolute inset-0"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-bebas tracking-widest text-[#A8A8A8] uppercase ml-1">Phone Number</label>
                    <div className="flex h-14 bg-transparent border border-[rgba(255,255,255,0.15)] rounded-[8px] overflow-hidden focus-within:border-[var(--color-brand-yellow)] transition-colors">
                      <div className="flex items-center px-4 bg-transparent border-r border-[rgba(255,255,255,0.15)] text-white text-[15px] gap-2 cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                        +91 
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="flex-1 bg-transparent text-white px-4 outline-none placeholder:text-[#555] text-[15px]"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handlePhoneContinue}
                    className="w-full h-14 bg-[var(--color-brand-yellow)] text-black font-bebas tracking-wider text-[22px] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#ffc21a] transition-all hover:shadow-[0_10px_25px_rgba(244,180,0,0.25)] hover:-translate-y-0.5 pt-1"
                  >
                    CONTINUE
                    <ArrowRight size={20} strokeWidth={2.5} className="-mt-1" />
                  </button>
                </motion.div>
              )}


              {/* STEP 2: OTP */}
              {step === 'otp' && (
                <motion.div 
                  key="otp-step"
                  variants={formVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}
                  className="w-full flex flex-col gap-6 absolute inset-0"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-end mb-1">
                      <label className="text-[12px] font-bebas tracking-widest text-[#A8A8A8] uppercase ml-1">Enter Code</label>
                      <button onClick={() => setStep('phone')} className="text-[#F15A24] text-[13px] hover:underline">Edit Number</button>
                    </div>
                    
                    {/* 6-Digit OTP Boxes */}
                    <div className="flex justify-between gap-2 sm:gap-4">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          ref={(el) => { otpRefs.current[idx] = el; }}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                          className="w-10 h-12 sm:w-12 sm:h-14 bg-transparent border border-[rgba(255,255,255,0.15)] rounded-[8px] text-center text-white text-[24px] font-bebas tracking-wider focus:border-[var(--color-brand-yellow)] outline-none transition-colors"
                        />
                      ))}
                    </div>

                    <div className="flex justify-center mt-2">
                      {timer > 0 ? (
                        <span className="text-[#555] text-[14px]">Resend OTP in <span className="text-white">{timer}s</span></span>
                      ) : (
                        <button className="text-[var(--color-brand-yellow)] text-[14px] hover:underline" onClick={() => setTimer(30)}>Resend OTP</button>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={handleVerify}
                    className="w-full h-14 bg-[#F15A24] text-white font-bebas tracking-wider text-[22px] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#ff6933] transition-all hover:shadow-[0_10px_25px_rgba(241,90,36,0.25)] hover:-translate-y-0.5 pt-1"
                  >
                    VERIFY
                  </button>
                </motion.div>
              )}


              {/* STEP 3: NAME */}
              {step === 'name' && (
                <motion.div 
                  key="name-step"
                  variants={formVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}
                  className="w-full flex flex-col gap-6 absolute inset-0"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-bebas tracking-widest text-[#A8A8A8] uppercase ml-1">First Name</label>
                    <div className="flex h-14 bg-transparent border border-[rgba(255,255,255,0.15)] rounded-[8px] overflow-hidden focus-within:border-[var(--color-brand-yellow)] transition-colors">
                      <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. John"
                        className="flex-1 bg-transparent text-white px-4 outline-none placeholder:text-[#555] text-[15px]"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleNameContinue}
                    className="w-full h-14 bg-[var(--color-brand-yellow)] text-black font-bebas tracking-wider text-[22px] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#ffc21a] transition-all hover:shadow-[0_10px_25px_rgba(244,180,0,0.25)] hover:-translate-y-0.5 pt-1 mt-auto"
                  >
                    CONTINUE
                    <ArrowRight size={20} strokeWidth={2.5} className="-mt-1" />
                  </button>
                </motion.div>
              )}


              {/* STEP 4: LOCATION */}
              {step === 'location' && (
                <motion.div 
                  key="location-step"
                  variants={formVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}
                  className="w-full flex flex-col gap-4 absolute inset-0"
                >
                  <button className="w-full h-14 bg-[rgba(241,90,36,0.1)] border border-[#F15A24] text-[#F15A24] font-bebas tracking-wider text-[20px] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[rgba(241,90,36,0.2)] transition-all pt-1">
                    <MapPin size={20} strokeWidth={2.5} className="-mt-1" />
                    USE CURRENT LOCATION
                  </button>

                  <div className="w-full flex items-center gap-4 py-2">
                    <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.1)]"></div>
                    <span className="font-bebas text-[#555] tracking-widest text-[14px]">OR</span>
                    <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.1)]"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex h-14 bg-transparent border border-[rgba(255,255,255,0.15)] rounded-[8px] overflow-hidden focus-within:border-[var(--color-brand-yellow)] transition-colors">
                      <div className="flex items-center justify-center px-4 text-[#A8A8A8]">
                        <Search size={18} />
                      </div>
                      <input 
                        type="text" 
                        value={addressSearch}
                        onChange={(e) => setAddressSearch(e.target.value)}
                        placeholder="Search for building or area"
                        className="flex-1 bg-transparent text-white pr-4 outline-none placeholder:text-[#555] text-[15px]"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleLocationComplete}
                    className="w-full h-14 bg-[var(--color-brand-yellow)] text-black font-bebas tracking-wider text-[22px] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#ffc21a] transition-all hover:shadow-[0_10px_25px_rgba(244,180,0,0.25)] hover:-translate-y-0.5 pt-1 mt-2"
                  >
                    CONTINUE
                    <ArrowRight size={20} strokeWidth={2.5} className="-mt-1" />
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer content (Only show on first 2 steps to avoid clutter) */}
          {(step === 'phone' || step === 'otp') && (
            <div className="mt-8 flex items-center justify-center gap-2 text-[#555] text-[13px]">
              <ShieldCheck size={16} />
              <span>We'll send you an OTP to verify your number</span>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
