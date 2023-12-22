import { DMSerifDisplay, pacifico } from '@/app/fonts'
import { InformationCircleIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'
import FeedbackForm from './FeedbackForm'

function Footer() {
  return (
    <section id="contact" className="footer bg-secondary py-24">
      <div className="px-16 mx-auto">
        <div
          className={`flex flex-wrap gap-12 justify-around text-white flex-row ${DMSerifDisplay.className}`}
        >
          <div className="flex flex-3 flex-col">
            <div className="flex flex-col gap-5">
              <div className="contact-section">
                <h4 className="text-xl text-primary">Contact</h4>
                <p className="text-base">+20 100 711 9762</p>
                <p>+20 100 799 1148</p>
              </div>
              <div className="contact-section">
                <h4 className="text-xl text-primary">Hotline</h4>
                <p className="text-base">+20 100 711 9762</p>
              </div>
              <div className="contact-section">
                <h4 className="text-xl text-primary">Email</h4>
                <p className="text-base">ammar@wpkama.com</p>
                <p className="text-base">mohamed@wpkama.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12 flex-4 justify-center">
            <div className="flex flex-row gap-24">
              <div className="get-in-menu">
                <h4 className="text-primary">Get in</h4>
                <div className="flex flex-col mt-4">
                  <Link href="/login">Login</Link>
                  <Link href="/login">Register</Link>
                </div>
              </div>
              <div className="know-more-menu">
                <h4 className="text-primary">Know more</h4>
                <div className="flex flex-col mt-4">
                  <Link href="/login">Features</Link>
                  <Link href="/login">About</Link>
                  <Link href="/login">Steps</Link>
                </div>
              </div>
              <div className="follow-us-menu">
                <h4 className="text-primary">Follow us</h4>
                <div className="flex flex-col mt-4">
                  <Link href="/login">Facebook</Link>
                  <Link href="/login">Instagram</Link>
                  <Link href="/login">Twitter</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <QuestionMarkCircleIcon className="w-12 h-12" />
              <InformationCircleIcon className="w-12 h-12" />
              <UserCircleIcon className="w-12 h-12" />
            </div>
            <div className={`text-center text-white`}>
              <span className="text-2xl">&copy;</span>
              <span className={`${pacifico.className} ml-2`}>
                Ammar Massoud
              </span>
            </div>
          </div>
          <div className="flex-3">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer