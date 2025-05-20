import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Brahmapadham</h3>
            <p className="text-amber-200 max-w-xs">
              Dedicated to spreading the timeless wisdom of the Bhagavad Gita and guiding spiritual seekers on their
              journey.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-amber-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-amber-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/teachings" className="text-amber-200 hover:text-white">
                  Teachings
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-amber-200 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-amber-200 hover:text-white">
                  Daily Schedule
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-amber-200 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/gita-classes" className="text-amber-200 hover:text-white">
                  Gita Classes
                </Link>
              </li>
              <li>
                <Link href="/programs/meditation" className="text-amber-200 hover:text-white">
                  Meditation Sessions
                </Link>
              </li>
              <li>
                <Link href="/programs/youth" className="text-amber-200 hover:text-white">
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link href="/programs/workshops" className="text-amber-200 hover:text-white">
                  Spiritual Workshops
                </Link>
              </li>
              <li>
                <Link href="/programs/retreats" className="text-amber-200 hover:text-white">
                  Spiritual Retreats
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-amber-200" />
                <span>
                  Sai viswa Layout, Bangalore Highway, Near Taj Hotel, Ramalayam Street Tirupati-517503, Tirupati
                  District, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-amber-200" />
                <span>+91 8790244582, +91 9000874713</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-amber-200" />
                <span>bbatpt@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-amber-800 pt-8 text-center text-amber-200">
          <p>© {new Date().getFullYear()} Brahmapadham Bhagavad Gita Adhyātmika Kṣetram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
