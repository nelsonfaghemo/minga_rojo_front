import bakugo from "../assets/images/bakugo-footer.png";
import logoMinga2 from "../assets/images/logo-minga-2.png";
import corazoncito from "../assets/images/union.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import vimeo from "../assets/images/vimeo.png";
import youtube from "../assets/images/youtube.png";

export default function Footer() {
  let cia = "";
  return (
    <footer className="w-full">
      <img
        src={bakugo}
        className="w-full h-48 object-cover object-top rounded-[0_0_48%_52%/_0%_0%_100%_100%]"
      />
      <div className="w-full h-48 bg-white flex justify-center items-center ">
        <div className="w-3/4 bg-white flex justify-between items-center pb-4 border-b border-gray-300">
          <div className="w-1/6 flex items-center justify-around">
            <a>Home</a>
            <a>Mangas</a>
          </div>
          <img src={logoMinga2} className="w-1/6" />
          <div className="w-1/6">
            <div className="flex justify-between py-3 ">
              <img src={facebook} className="w-[15%] object-contain" />
              <img src={twitter} className="w-[15%] object-contain" />
              <img src={vimeo} className="w-[15%] object-contain" />
              <img src={youtube} className="w-[15%] object-contain" />
            </div>
            <button className="text-white px-14 py-1  bg-orange-500 rounded">
              Donate <span src={corazoncito}></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
