import React, { useState, useRef, useEffect } from 'react';
import { MdChat, MdClose } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const ChatWidget = () => {
  const widgetRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const defaultSize = { width: 320, height: 400 };

  const getClampedPosition = (x, y, width = defaultSize.width, height = defaultSize.height) => {
    const padding = 10;
    const maxX = window.innerWidth - width - padding;
    const maxY = window.innerHeight - height - padding;
    return {
      x: Math.min(Math.max(x, padding), maxX),
      y: Math.min(Math.max(y, padding), maxY),
    };
  };

  const updateDefaultPosition = () => {
    const baseX = window.innerWidth - 90;
    const baseY = window.innerHeight - 90;
    setPosition(getClampedPosition(baseX, baseY, 64, 64));
  };

  useEffect(() => {
    updateDefaultPosition();
    window.addEventListener('resize', updateDefaultPosition);
    return () => window.removeEventListener('resize', updateDefaultPosition);
  }, []);

  const startDrag = (clientX, clientY) => {
    if (!widgetRef.current) return;
    setDragging(true);
    offsetRef.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const doDrag = (clientX, clientY) => {
    if (!dragging) return;
    const w = widgetRef.current?.offsetWidth || defaultSize.width;
    const h = widgetRef.current?.offsetHeight || defaultSize.height;
    const newPos = getClampedPosition(clientX - offsetRef.current.x, clientY - offsetRef.current.y, w, h);
    setPosition(newPos);
  };

  const stopDrag = () => setDragging(false);

  const onMouseDown = (e) => {
    if (!widgetRef.current || ["INPUT", "TEXTAREA", "BUTTON"].includes(e.target.tagName)) return;
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  };

  const onMouseMove = (e) => doDrag(e.clientX, e.clientY);
  const onMouseUp = stopDrag;

  const onTouchStart = (e) => {
    if (!widgetRef.current || e.touches.length !== 1) return;
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  };

  const onTouchMove = (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
  };

  const onTouchEnd = stopDrag;

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [dragging]);

  const toggleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        const widgetWidth = defaultSize.width;
        const widgetHeight = defaultSize.height;
        const spaceBelow = window.innerHeight - position.y;
        const spaceAbove = position.y;

        let newY = position.y;

        // Expand upward if not enough space below
        if (spaceBelow < widgetHeight && spaceAbove > widgetHeight) {
          newY = position.y - widgetHeight + 64;
        }

        const clamped = getClampedPosition(position.x, newY, widgetWidth, widgetHeight);
        setPosition(clamped);
      } else {
        updateDefaultPosition();
      }
      return next;
    });
  };

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'fnlserviceid',
        'fnltemplateid',
        { ...formData, form_name: 'Chat Widget Submission' },
        '_NXkr3UnpbWQmmVNs'
      );
      setFormData({ name: '', phone: '', email: '', message: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setIsOpen(false);
    } catch (err) {
      alert('Oops, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={widgetRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: isOpen ? defaultSize.width : 64,
        height: isOpen ? 'auto' : 64,
        zIndex: 9999,
        userSelect: dragging ? 'none' : 'auto',
        boxShadow: '0 8px 24px rgb(255 215 0 / 0.3), 0 0 15px rgb(138 43 226 / 0.5)',
        borderRadius: 16,
        cursor: dragging ? 'grabbing' : 'grab',
        background: 'linear-gradient(135deg, #FFD700, #4B0082, #1E90FF)',
        color: '#fff',
        overflow: 'hidden',
        transition: 'width 0.3s ease',
        touchAction: 'none',
      }}
    >
      {isOpen ? (
        <div className="flex flex-col h-full">
          <div
            style={{
              background: 'linear-gradient(90deg, #FFD700 0%, #4B0082 50%, #1E90FF 100%)',
              padding: '12px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          >
            <h4 style={{ fontWeight: '700', fontSize: 18, margin: 0 }}>Chat with our team</h4>
            <button
              onClick={toggleOpen}
              style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer' }}
              aria-label="Close chat"
            >
              <MdClose />
            </button>
          </div>

          <form
            onSubmit={onSubmit}
            style={{
              padding: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: '#000',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              maxHeight: 'calc(100vh - 150px)',
              overflowY: 'auto',
              pointerEvents: loading ? 'none' : 'auto',
            }}
          >
            {success && <div style={{ color: 'green', fontWeight: 'bold' }}>Message sent successfully!</div>}
            <input
              name="name"
              placeholder="Your name *"
              required
              value={formData.name}
              onChange={onChange}
              style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ccc' }}
            />
            <input
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={onChange}
              style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ccc' }}
            />
            <input
              name="email"
              placeholder="Email address *"
              required
              value={formData.email}
              onChange={onChange}
              style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ccc' }}
            />
            <textarea
              name="message"
              placeholder="Your message *"
              required
              rows={4}
              value={formData.message}
              onChange={onChange}
              style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ccc', resize: 'vertical' }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                background: 'linear-gradient(90deg, #FFD700, #4B0082, #1E90FF)',
                color: '#fff',
                fontWeight: '700',
                padding: '12px',
                borderRadius: 8,
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleOpen}
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: 'none',
            background: 'linear-gradient(135deg, #FFD700, #4B0082, #1E90FF)',
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.8), 0 0 20px 6px rgba(138, 43, 226, 0.6)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'pulse 2.5s infinite',
          }}
          aria-label="Open chat"
        >
          <MdChat size={32} />
          <style>{`
            @keyframes pulse {
              0% { box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.8), 0 0 12px 4px rgba(138, 43, 226, 0.6); }
              50% { box-shadow: 0 0 20px 6px rgba(255, 215, 0, 0.9), 0 0 28px 10px rgba(138, 43, 226, 0.8); }
              100% { box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.8), 0 0 12px 4px rgba(138, 43, 226, 0.6); }
            }
          `}</style>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
