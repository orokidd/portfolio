type Resume = {
  profile: string;
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }[];
  education: {
    school: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];
  skills: {
    languages: string[];
    frameworks: string[];
    database: string[];
    others: string[];
  };
};


export const resume:Resume = {
    profile: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",

    experience: [
        {
            company: "CV. Teknik Pratama",
            position: "Administration",
            startDate: "Jan 2024",
            endDate: "Current",
            responsibilities: ["Membuat faktur pajak untuk setiap transaksi dengan aplikasi Coretax", "Membuat SPT Masa dan SPT Tahunan dengan aplikasi Coretax", "Desain post instagram dengan Adobe Photoshop"]
        },

        {
            company: "Fiverr",
            position: "Freelance Photo Editor",
            startDate: "Jul 2020",
            endDate: "Feb 2021",
            responsibilities: ["Melakukan editing foto dengan aplikasi Adobe Photoshop dengan kriteria edit sesuai dengan permintaan pembeli", "Berkomunikasi dengan pembeli menggunakan bahasa inggris"]
        },

        {
            company: "PT. PLN UP2D KALTIMRA",
            position: "Intern",
            startDate: "Jan 2018",
            endDate: "Apr 2018",
            responsibilities: ["Membuat website kantor menggunakan HTML, CSS, PHP dan MySQL dengan fitur: Landing page, Gallery, Berita, dan Dashboard admin untuk kelola konten", "Desain majalah bulanan menggunakan Canva", "Melakukan input data menggunakan Microsoft Excel"]
        },
    ],

    education: [
        {
            school: "Institut Teknologi Kalimantan",
            description:"Sistem Informasi (resigned)",
            startDate: "Aug 2022",
            endDate: "Mar 2022",
        },

        {
            school: "SMKN 2 Balikpapan",
            description:"Rekayasa Perangkat Lunak",
            startDate: "Jan 2018",
            endDate: "Apr 2018",
        },
    ],

    skills: {
        languages: ["JavaScript", "TypeScript", "Node"],
        frameworks: ["React", "Next JS", "Express"],
        database: ["PostgreSQL", "MySQL", "PrismaORM"],
        others: ["GSAP", "Tailwind CSS", "EJS", "Supabase", "Webpack", "Jest", "Git", "Linux", "Photoshop", "Canva"]
    }
}