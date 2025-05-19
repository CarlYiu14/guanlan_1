import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    document.title = "Guanlan Scholarship Foundation";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-100 py-6 px-4 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Guanlan Scholarship Foundation</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#stories" className="hover:underline">Stories</a>
            <a href="#donate" className="hover:underline">Donate</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Empowering Girls in Rural China</h2>
          <p className="text-lg mb-6">
            We support talented girls in rural China by providing scholarships to help them complete their education. Join us in making a difference.
          </p>
          <a href="#donate" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg">Donate Now</a>
        </section>

        <section id="about" className="my-12">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-700">
            Guanlan Scholarship Foundation collaborates with grassroots NGOs in China to deliver scholarships directly to girls in need. Our work is driven by volunteers and fueled by global supporters, especially the Chinese diaspora in North America.
          </p>
        </section>

        <section id="stories" className="my-12">
          <h3 className="text-2xl font-semibold mb-4">Stories of Hope</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-gray-700">"Thanks to the scholarship, I was able to finish high school and now I’m studying nursing. I want to give back to my village." — Li Mei, Hunan</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-gray-700">"My dream is to become a teacher. This opportunity changed my life." — Zhang Xiu, Sichuan</p>
            </div>
          </div>
        </section>

        <section id="donate" className="my-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Make a Donation</h3>
          <p className="text-gray-700 mb-6">
            Your support helps cover tuition, books, and living costs. 100% of donations go directly to scholarships.
          </p>
          <a href="https://donate.example.com" className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg">Donate Securely</a>
        </section>

        <section id="contact" className="my-12">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>Email: info@guanlanscholarshipfoundation.org</p>
          <p>Follow us on <a href="https://facebook.com/guanlanscholarship" className="text-blue-600 underline">Facebook</a></p>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Guanlan Scholarship Foundation. All rights reserved.
      </footer>
    </div>
  );
}
