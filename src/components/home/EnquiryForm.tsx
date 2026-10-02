import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { occasions } from '@/data/occasions'
import { whatsappUrl } from '@/lib/whatsapp'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.'),
  phone: z.string().trim()
    .min(1, 'Please enter your phone number.')
    .refine((value) => /^\+?[\d\s()-]+$/.test(value) && value.replace(/\D/g, '').length >= 10 && value.replace(/\D/g, '').length <= 15, {
      message: 'Please enter a valid phone number.',
    }),
  occasion: z.string().min(1, 'Please choose an occasion.'),
  date: z.string().min(1, 'Please choose the event date.'),
  area: z.string().trim().min(2, 'Please enter the venue area.'),
  budget: z.string().min(1, 'Please choose a budget.'),
})

type EnquiryValues = z.infer<typeof enquirySchema>

const budgetOptions = [
  { value: 'Standard', label: 'Standard (₹10,000–₹50,000)' },
  { value: 'Premium', label: 'Premium (₹40,000–₹80,000)' },
  { value: 'Luxury', label: 'Luxury (₹80,000+)' },
  { value: 'Not sure', label: 'Not sure yet' },
]

const fieldClass =
  'mt-2 h-12 w-full rounded border border-line bg-white px-4 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold'

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: '', phone: '', occasion: '', date: '', area: '', budget: '' },
  })

  const onSubmit = (values: EnquiryValues) => {
    const occasion = occasions.find((item) => item.slug === values.occasion)?.name ?? values.occasion
    const message = [
      'Hi Alankarana, I’d like to enquire about celebration decor.',
      '',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Occasion: ${occasion}`,
      `Event date: ${values.date}`,
      `Area: ${values.area}`,
      `Budget: ${values.budget}`,
      '',
      'Source: Alankarana Website – Enquiry Form',
    ].join('\n')

    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  const today = new Date().toLocaleDateString('en-CA')

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
      <Field label="Name" error={errors.name?.message}>
        <input
          {...register('name')}
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          className={fieldClass}
        />
      </Field>

      <Field label="Phone" error={errors.phone?.message}>
        <input
          {...register('phone')}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.phone}
          className={fieldClass}
        />
      </Field>

      <Field label="Occasion" error={errors.occasion?.message}>
        <select {...register('occasion')} aria-invalid={!!errors.occasion} className={fieldClass}>
          <option value="">Choose an occasion</option>
          {occasions.map((occasion) => (
            <option key={occasion.slug} value={occasion.slug}>{occasion.name}</option>
          ))}
        </select>
      </Field>

      <Field label="Event date" error={errors.date?.message}>
        <input
          {...register('date')}
          type="date"
          min={today}
          aria-invalid={!!errors.date}
          className={fieldClass}
        />
      </Field>

      <Field label="Venue area" error={errors.area?.message}>
        <input
          {...register('area')}
          type="text"
          autoComplete="address-level2"
          placeholder="e.g. Jubilee Hills"
          aria-invalid={!!errors.area}
          className={fieldClass}
        />
      </Field>

      <Field label="Budget" error={errors.budget?.message}>
        <select {...register('budget')} aria-invalid={!!errors.budget} className={fieldClass}>
          <option value="">Choose a budget</option>
          {budgetOptions.map((budget) => (
            <option key={budget.value} value={budget.value}>{budget.label}</option>
          ))}
        </select>
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-burgundy px-7 font-semibold text-cream transition-colors hover:bg-burgundy-dark sm:w-auto"
        >
          Send enquiry
          <Send size={17} strokeWidth={1.75} aria-hidden />
        </button>
        <p className="type-caption mt-3">Your details will open as a ready-to-send WhatsApp message.</p>
      </div>
    </form>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="type-label block text-ink">
      {label}
      {children}
      {error && <span role="alert" className="mt-1.5 block text-xs font-normal text-burgundy">{error}</span>}
    </label>
  )
}
