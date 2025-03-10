'use client';
export const addToCalendar = () => {
  const event = {
    title: "Berrin & Bayram Nikah Töreni",
    description: "Berrin Eser ve Bayram Kızıltaş'ın nikah töreni",
    location: "Yenişehir Belediyesi Nikah Salonu Fabrika Mahallesi 763. Sk. No: 3 Yenişehir / Diyarbakır",
    startTime: new Date("2025-03-29T13:00:00"),
    endTime: new Date("2025-03-29T15:00:00"),
  };
  const eventString = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@wedding-ceremony.vercel.app`,
    `DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}`,
    `URL:${document.URL}`,
    `DTSTART:${event.startTime.toISOString().replace(/-|:|\.\d+/g, '')}`,
    `DTEND:${event.endTime.toISOString().replace(/-|:|\.\d+/g, '')}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    "BEGIN:VALARM",
    "TRIGGER:-P6D",
    "DURATION:PT1H",
    "ACTION:DISPLAY",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\n");
  const blob = new Blob([eventString], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "berrin-bayram-wedding-ceremony.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
