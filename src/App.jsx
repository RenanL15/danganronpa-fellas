import React from "react";
import { useState, useEffect } from "react";
import Warning from "./assets/imgs/warning.png";
import ThhBanner from "./assets/imgs/thhBanner.png";
import Card from "./components/Card/Card";
import FranchiseLogos from "./components/FranchiseLogos/FranchiseLogos";

// Trigger Happy Havoc characters
import Aoi from "./assets/imgs/thhCharacters/aoi.png";
import Byakuya from "./assets/imgs/thhCharacters/byakuya.png";
import Celeste from "./assets/imgs/thhCharacters/celestia.png";
import Chihiri from "./assets/imgs/thhCharacters/chihiri.png";
import Hifumi from "./assets/imgs/thhCharacters/hifumi.png";
import Jack from "./assets/imgs/thhCharacters/jack.png";
import Junko from "./assets/imgs/thhCharacters/junko.png";
import Kirigiri from "./assets/imgs/thhCharacters/kyoko.png";
import Leon from "./assets/imgs/thhCharacters/leon.png";
import Mondo from "./assets/imgs/thhCharacters/mondo.png";
import Naegi from "./assets/imgs/thhCharacters/naegi.png";
import Sakuna from "./assets/imgs/thhCharacters/sakuna.png";
import Sayaka from "./assets/imgs/thhCharacters/sayaka.png";
import Taka from "./assets/imgs/thhCharacters/taka.png";
import Toko from "./assets/imgs/thhCharacters/toko.png";
import Yasuhiro from "./assets/imgs/thhCharacters/yasuhiro.png";

// Goodbye Despair characters
import Ibuki from "./assets/imgs/gdCharacters/ibuki.png";
import Mahiru from "./assets/imgs/gdCharacters/mahiru.png";
import Chiaki from "./assets/imgs/gdCharacters/chiaki.png";
import Peko from "./assets/imgs/gdCharacters/peko.png";
import Nagito from "./assets/imgs/gdCharacters/nagito.png";
import Soda from "./assets/imgs/gdCharacters/soda.png";
import Hajime from "./assets/imgs/gdCharacters/hajime.png";
import Fuyuhiko from "./assets/imgs/gdCharacters/fuyuhiko.png";
import Sonia from "./assets/imgs/gdCharacters/sonia.png";
import Hiyoko from "./assets/imgs/gdCharacters/hiyoko.png";
import Nekomaru from "./assets/imgs/gdCharacters/nekomaru.png";
import Mikan from "./assets/imgs/gdCharacters/mikan.png";
import Teruteru from "./assets/imgs/gdCharacters/teruteru.png";
import Akane from "./assets/imgs/gdCharacters/akane.png";
import Gundham from "./assets/imgs/gdCharacters/gundham.png";
import ByakuyaGD from "./assets/imgs/gdCharacters/byakuya.png";

export default function App() {
  const [franchise, setFranchise] = useState("thh");
  const [spoilers, setSpoilers] = useState(false);
  const showSpoilers = () => {
    let qsShow;
    if (!spoilers) {
      qsShow = confirm("Are you sure you want to see spoilers?");
      qsShow ? setSpoilers(true) : null;
    } else {
      setSpoilers(false);
    }
  };
  const thhCharactersInfo = [
    { name: "Aoi Asahina", isDead: false, icon: Aoi },
    { name: "Byakuya Togami", isDead: false, icon: Byakuya },
    { name: "Celestia Ludenberg", isDead: true, icon: Celeste },
    { name: "Chihiri Fujisaki", isDead: true, icon: Chihiri },
    { name: "Genocide Jack", isDead: false, icon: Jack },
    { name: "Hifumi Yamada", isDead: true, icon: Hifumi },
    { name: "Junko Enoshima", isDead: true, icon: Junko },
    { name: "Kiyotaka Ishimaru", isDead: true, icon: Taka },
    { name: "Kyoko Kirigiri", isDead: false, icon: Kirigiri },
    { name: "Leon Kuwata", isDead: true, icon: Leon },
    { name: "Mondo Owada", isDead: true, icon: Mondo },
    { name: "Naegi Makoto", isDead: false, icon: Naegi },
    { name: "Sakuna Ogami", isDead: true, icon: Sakuna },
    { name: "Sayaka Maizono", isDead: true, icon: Sayaka },
    { name: "Toko Fuwaka", isDead: false, icon: Toko },
    { name: "Yasuhiro Hagakute", isDead: false, icon: Yasuhiro },
  ];
  const gdCharactersInfo = [
    { name: "Akane Owana", isDead: false, icon: Akane },
    { name: "Chiaki Nanami", isDead: false, icon: Chiaki },
    { name: "Byakuya Togami", isDead: true, icon: ByakuyaGD },
    { name: "Fuyuhiko Kuruzyu", isDead: false, icon: Fuyuhiko },
    { name: "Gundham Tanaka", isDead: false, icon: Gundham },
    { name: "Hajime Hinata", isDead: false, icon: Hajime },
    { name: "Hiyoko Saijoni", isDead: true, icon: Hiyoko },
    { name: "Ibuki Mioda", isDead: true, icon: Ibuki },
    { name: "Mahiru Koizumi", isDead: true, icon: Mahiru },
    { name: "Mikan Tsumiki", isDead: false, icon: Mikan },
    { name: "Nagito Komaeda", isDead: false, icon: Nagito },
    { name: "Nekomaru Nidai", isDead: false, icon: Nekomaru },
    { name: "Peko Pekoyama", isDead: true, icon: Peko },
    { name: "Kazuichi Soda", isDead: false, icon: Soda },
    { name: "Sonia Nevermind", isDead: false, icon: Sonia },
    { name: "Teruteru Hanamura", isDead: true, icon: Teruteru },
  ];
  // console.log(spoilers);
  return (
    <main className={`bg-[url('./assets/imgs/thhBanner.png')] bg-local`}>
      <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-[rgba(0,0,0,0.95)]">
        <FranchiseLogos
          franchise={franchise}
          setFranchise={setFranchise}
          setSpoilers={setSpoilers}
        />
        <button
          onClick={showSpoilers}
          className={`mt-5 p-3 font-['Open_Sans'] rounded-lg text-white font-bold transition ease-in-out ${spoilers ? "bg-gray-600 hover:bg-gray-700" : "bg-red-900 hover:bg-red-950"}`}>
          {spoilers ? "Hide spoilers" : "Show spoilers"}
        </button>
        <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 2xl:px-28">
          {franchise === "thh"
            ? thhCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  showSpoilers={spoilers}
                />
              ))
            : null}
          {franchise === "gd"
            ? gdCharactersInfo.map((character, index) => (
                <Card
                  key={index}
                  chName={character.name}
                  chImage={character.icon}
                  isDead={character.isDead}
                  showSpoilers={spoilers}
                />
              ))
            : null}
        </div>
        {franchise === "kh" ? (
          <div className="p-16 flex justify-center items-center gap-2 text-white bg-gray-800 rounded-2xl ">
            <img className="w-12" src={Warning} />
            <h1 className="font-bold text-2xl">EM DESENVOLVIMENTO <span className="font-normal text-xl">(ainda não joguei...)</span></h1>
            <img className="w-12" src={Warning} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
