function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#edf1f5] bg-white"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center"
            >
              <img
                src="/logo-text.png"
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-[350px] text-[11px] leading-[18px] text-[#8190a5]">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            {/* Social Links - Name Only */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="text-[11px] text-[#475569] transition hover:text-[#d83b78]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[11px] text-[#475569] transition hover:text-[#d83b78]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[11px] text-[#475569] transition hover:text-[#d83b78]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-[#172033]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-[#172033]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-[#172033]">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[11px] text-[#8190a5] transition hover:text-[#d83b78]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-3 border-t border-[#edf1f5] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-[#a0adbc]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[10px] text-[#a0adbc] transition hover:text-[#d83b78]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-[#a0adbc] transition hover:text-[#d83b78]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;