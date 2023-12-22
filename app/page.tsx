'use client';

import Image from "next/image";
import { DMSerifDisplay, outfit, pacifico } from "@/app/fonts";
import Feature from "@/components/Feature";
import { features, steps } from "@/lib/app_lists";
import VerticalHeadline from "@/components/VerticalHeadline";
import styles from "@/app/home.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="home">
      <div className={`flex flex-col min-h-[700px] bg-black bg-[url('/hero.svg')] bg-no-repeat ${styles.hero}`}>
        <Header />
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-end">
            <div className="min-w-[300px]">
              <h2
                className={`text-white text-4xl py-5 ${DMSerifDisplay.className}`}
              >
                Be Part of decision
              </h2>
              <h2
                className={`text-primary text-7xl ${DMSerifDisplay.className}`}
              >
                Vote today
              </h2>
              <div className="flex flex-row gap-5 py-7 px-5">
                <Link href="/register">
                  <button
                    className={`btn bg-primary text-white py-3 px-10 rounded-md ${outfit.className}`}
                  >
                    Register
                  </button>
                </Link>
                <button
                  className={`btn bg-primary text-white py-3 px-10 rounded-md ${outfit.className}`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container py-32 mx-auto flex-row gap-[50px]">
        <VerticalHeadline
          borderClass="border-primary"
          colorClass="text-secondary"
          text="Features"
        />
        <div className="flex-fill h-full">
          <ul className="flex gap-10 flex-col">
            {features.map((feature, idx) => (
              <Feature
                key={idx}
                icon={
                  <feature.icon className="h-16 w-16 text-black peer-focus:text-gray-900" />
                }
                text={feature.text}
              />
            ))}
          </ul>
        </div>
      </div>
      <section className="bg-secondary">
        <div id="about" className="flex container py-32 mx-auto items-center flex-row gap-[50px] ">
          <VerticalHeadline
            borderClass="border-white"
            text="About"
            colorClass="text-white"
          />
          <div className="flex-fill h-full">
            <p className="text-white text-lg">
              An online voting system that will replace the old ballot sytem or
              paper system. Over the time we have utilized the required
              technology in every sector to improve efficiency and save the
              extra resources. But the voting system is still very expensive and
              requires a bigger workforce. The system is slower and still not
              completely tamper proof. We bring the system that is safe,
              reliable and solve the modern issues like higher reachability of
              the booth, crowd free voting, inexpensive, faster results and
              others.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-10 container mx-auto">
          <div className="sec-header">
            <h3 className={`text-5xl ${DMSerifDisplay.className}`}>
              Follow These Easy Steps
            </h3>
            <hr className="w-96 border-primary border-t-4 -mt-1" />
          </div>
          <div className="content">
            <ul className="flex flex-col gap-6 pt-12 justify-center">
              {steps.map((step, idx) => (
                <li className="" key={idx}>
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={step.icon}
                      alt={step.text}
                      width={60}
                      height={60}
                    />
                    <p className="">{step.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
