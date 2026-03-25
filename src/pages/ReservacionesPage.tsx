import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { fadeInUp } from '../utils/easings';

export default function ReservacionesPage() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    personas: '',
    tipo: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const lines = [
      `*Reservación El Panda Restaurant*`,
      ``,
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Fecha: ${form.fecha}`,
      `Personas: ${form.personas}`,
      `Tipo de visita: ${form.tipo}`,
      form.mensaje ? `Mensaje: ${form.mensaje}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/18498864256?text=${encoded}`, '_blank');
  };

  return (
    <div className="reservaciones-page">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="section-label">Reservaciones</span>
          <h1 className="section-title">Reserva Tu Mesa</h1>
          <p className="section-subtitle">
            Completa el formulario y te enviaremos la confirmación por
            WhatsApp. También puedes escribirnos directamente.
          </p>
        </motion.div>

        <motion.div
          className="reservaciones-form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="form-input"
              placeholder="Tu nombre completo"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="telefono">
                Teléfono / WhatsApp
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                className="form-input"
                placeholder="849 000 0000"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="fecha">
                Fecha de visita
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                className="form-input"
                value={form.fecha}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="personas">
                Número de personas
              </label>
              <select
                id="personas"
                name="personas"
                className="form-select"
                value={form.personas}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="1-2">1 - 2 personas</option>
                <option value="3-5">3 - 5 personas</option>
                <option value="6-10">6 - 10 personas</option>
                <option value="10+">Más de 10</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="tipo">
                Tipo de visita
              </label>
              <select
                id="tipo"
                name="tipo"
                className="form-select"
                value={form.tipo}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Solo comer">Solo comer</option>
                <option value="Tour + almuerzo">Tour + almuerzo</option>
                <option value="Evento privado">Evento privado</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="mensaje">
              Mensaje adicional
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-textarea"
              placeholder="Alguna petición especial, alergias, celebración..."
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 16 }}>
            <MagneticButton className="btn-primary" onClick={handleSubmit}>
              💬 Enviar por WhatsApp
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/18498864256"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              O escríbenos directamente →
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
