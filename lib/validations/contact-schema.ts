// TODO: Add Zod schema for contact form validation (shared with app/api/contact/route.ts)

export type ContactFormData = {
  name: string
  email: string
  message: string
}
