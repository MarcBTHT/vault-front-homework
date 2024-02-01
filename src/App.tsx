import { useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import Header from "./components/header"
import Footer from "./components/footer"
import TransactionCard from "./components/TransactionCard"
import { TransactionNotif } from "./types/index"

const API = "http://localhost:5000";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | TransactionNotif[]>(null);

  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/search?q=${encodeURIComponent(searchText)}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    effect();
  }, [searchText]);

  return (
    <div style={{ background: 'radial-gradient(circle, rgba(215,188,232,1) 0%, rgba(255,255,255,1) 100%)' }}>
      <div className='flex flex-col min-h-screen mx-auto' style={{ maxWidth: '1500px' }}>
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center">
          <section className='relative text-center '>
            <TextInput value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
            {isLoading ? (
              <p className="mt-5 text-gray-800">{"Loading..."}</p>
            ) : results && results?.length > 0 ? (
              <div>
                {results.map((transaction) => (
                  <TransactionCard key={transaction.id} transaction={transaction} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <p className="mt-5">...no results found</p>
                <img src="no-result-bg.png" alt="No results" className="max-w-xs" />
              </div>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;