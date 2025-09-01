"use client";
import { useState } from "react";
import Link from "next/link";

export default function SalesforceExplanation() {
  const [lang, setLang] = useState("english");

  return (
    <div className="px-6 md:px-24 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
  {/* Left side: Title + Toggle */}
  <div className="flex flex-col">
    <h1 className="text-2xl md:text-4xl font-bold mb-3 whitespace-nowrap">
        Salesforce Explained
    </h1>

    {/* Tabs (Language Toggle) */}
    <div className="tabs relative flex bg-gray-100 shadow-sm p-1 rounded-full w-fit">
      {/* Glider - positioned behind buttons */}
      <span
        className="glider absolute top-1 h-7 w-14 bg-white rounded-full shadow-sm transition-transform duration-300 ease-out"
        style={{
          transform: lang === "english" ? "translateX(0)" : "translateX(56px)",
        }}
      />
      
      {/* Buttons positioned above glider */}
      
      <button
        className={`tab relative z-10 h-7 w-14 text-xs font-medium rounded-full transition-colors duration-200 ${
          lang === "english" ? "text-green-600" : "text-gray-600 hover:text-gray-800"
        }`}
        onClick={() => setLang("english")}
      >
        EN
      </button>
      <button
        className={`tab relative z-10 h-7 w-14 text-xs font-medium rounded-full transition-colors duration-200 ${
          lang === "tanglish" ? "text-green-600" : "text-gray-600 hover:text-gray-800"
        }`}
        onClick={() => setLang("tanglish")}
      >
        Tanglish
      </button>
    </div>
  </div>

  {/* Right side: Back button */}
  <div className="flex items-center gap-4">
    <Link href="/" className="text-center">
      <div>
        <span className="text-4xl md:text-6xl font-bold leading-tight bg-green-400 text-black px-1">
          R
        </span>
        <p className="text-xs text-gray-400 mt-1">Click to go back</p>
      </div>
    </Link>
  </div>
</header>


      <article
        className="prose prose-invert max-w-none
                   prose-p:my-4 prose-p:leading-relaxed
                   prose-strong:text-white"
      >
        {lang === "tanglish" ? (
          <>
            <p>Namma oor annachi kadai eduthupomae</p>
            <p>anga products vikkradhu (Sales) mattum illa,</p>
            <p>sila ber kadanuku vanguvaanga (Credit),</p>
            <p>sila ber wholesale ah vanguvaanga (B2B),</p>
            <p>sometimes local channel la advertise panuvanga (Marketing),</p>
            <p>customer complaints vandhaa handle panuvanga (Service),</p>
            <p>
              monthly account ellam paathu endha items sell agudhunu check panni
              andha item ah restock panuvanga, sell agadha items ah purchase
              panradha stop panuvanga (Analytics & Actions).
            </p>
            <p>Anaa idellam orae oru note la maintain panuvanga</p>
            <p>
              so idhu chinna kadai ku fine (avg 200 customer / day), but
              Unilever eduthupomae...
            </p>
            <br />
            <p> Unilever ku daily lakhs of customer transactions, thousands of products, multiple countries, different currencies, various languages, complex supply chains, regulatory compliance ellam irukku. Anga oru notebook la maintain panna mudiyaadhu! Avangaluku systematic ah automated processes, real-time data analysis, global integration ellam venum. </p>
            <p> Anga dhaan Salesforce entry, annachi kadai oda simple notebook system ah enterprise level ku scale panni, Sales Cloud la millions of transactions, Marketing Cloud la global campaigns across multiple channels, Service Cloud la 24/7 customer support different languages la, Commerce Cloud la complex B2B operations, Financial Services la advanced credit management, Analytics la AI insights, plus complete automation and integration capabilities kudukraanga. </p>
            <hr />
            <p>Purinjudhaa Makka.</p>
          </>
        ) : (
          <>
            <p>
                Think of Salesforce like a cloud where businesses rent space to run their
                work. Instead of buying big computers or building their own data centers,
                they just use Salesforce’s online servers.
            </p>
            <p>
                In that space, they keep all their customer details & transactions like
                names, what they bought, and any problems they had.
            </p>
            <p>Once we put data into Salesforce</p>
            <p>
                We can Automate tasks : like sending reminders through email or any possible
                tool you can imagine
            </p>
            <p>
                We can get Insights from the data : like which products are the best seller.
            </p>
            <p>
                Teams can Collaborate in one place : sales, marketing, and support all see
                the same customer info.
            </p>
            <p>
                We can Integrate : Gmail, WhatsApp, payment apps, and more.
            </p>
            <p>
                Secure : Salesforce handles safety, backups, and
                upgrades automatically.
            </p>
            <p>
                AgentForce : Work done proactively and autonomously, No or Less human input.
            </p>
            <hr />
            <p>
                So basically: Salesforce is a rented online space where businesses store
                customer info, automate work, work together, connect apps, and use tools
                like AgentForce to make smarter decisions.
            </p>
          </>


        )}
      </article>
    </div>
  );
}
