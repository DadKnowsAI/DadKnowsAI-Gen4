// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About DadKnows */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-white text-blue-600 rounded-lg px-2 py-1 mr-2 text-lg font-bold">D</span>
              DadKnows
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted community for expert advice. Get instant help from real dads on home repair, cooking, car trouble, and parenting.
            </p>
            <div className="flex items-center mt-4 space-x-2 text-sm">
              <div className="flex items-center bg-blue-400/30 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                247 experts online
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/categories/home-repair" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">🔧</span> Home Repair
                </Link>
              </li>
              <li>
                <Link href="/categories/cooking" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">🍳</span> Cooking
                </Link>
              </li>
              <li>
                <Link href="/categories/car-trouble" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">🚗</span> Car Trouble
                </Link>
              </li>
              <li>
                <Link href="/categories/parenting" className="hover:text-white transition-colors flex items-center">
                  <span className="mr-2">👶</span> Parenting
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  Browse Communities
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/experts" className="hover:text-white transition-colors">
                  Top Experts
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-white transition-colors">
                  Ask Dad AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Stats */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform Stats</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">1,858 solved</p>
                  <p className="text-xs">today</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.754a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">8,333 nods</p>
                  <p className="text-xs">given this week</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/help" className="hover:text-white transition-colors text-sm">
                  Help Center →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 DadKnows. Built with dad wisdom and coffee.
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/education" className="hover:text-white transition-colors">
                Learn AI
              </Link>
              <Link href="/leaderboard" className="hover:text-white transition-colors">
                Rankings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;