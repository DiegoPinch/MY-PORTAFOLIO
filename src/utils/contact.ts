export function buildMailto(
  recipient: string,
  values: { name: string; email: string; topic: string; message: string },
): string {
  const subject = `${values.topic} — ${values.name.trim()}`;
  const body = `Hola Diego,\n\n${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
