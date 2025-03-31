import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABAlBMVEX///8AAAApa9bd3d3YLyPJyckhV6W3CAh9fX0hV63Pz8/h4eHl5eXR0dFLS0utra02NjbiMSWbm5u7u7spKSkqb90PKFHY2Nizs7OOjo6jo6MiWqtERES/CAjFxcUMIT719fV0dHQvLy8bRoaFhYUjIyNqamqVlZWLi4vs7OxhYWFPT09aWloNDQ0nZ8yqJRuWIRhnBAQ8PDwDCBAkYLsTMV4YP3hNEQyWBgZOAwMfUZoXFxfNJBvCKh8lYsFxGBKoBwcIFywaQ4cFDh4NIkUKGzPtMyYdS5eGBgZ0BQUbBQSEHBUrAQGxJh0hBwVDAwNgFQ88DAknAQGPBgZcFA80CwhMuXLYAAAKkUlEQVR4nO2dbXsatxKGs1AcZ22MbZLitxBwTIyDSVqnTtIa181r29D0nKbJ//8rByzNrqQd7UqrWbCvM8+39sKDbkZ6JI12lTt3WCwWi8VisVgsFovF8lRvb7h7raNVZ8m/OO7kBm6VDxwTAjajEK3aA68FBX5CRxjUjihqWAMfhgVuUwGG/dJRtGsL3AsM3KciPAlsyLY1cmDgIyrCO6OwhpxYA/fDAtfJCHunIe3I87wnIYG7ZIAzndTr9bVjEXi4g2lPlfjg4fr8rwp+vPlH5OdX21jglhK3Nbj+4GCtOHAptURDdtbXEDXjVHJ22XQN3Baf38YDN5TA968/eL8COJWwNf8FM4obqeKShIWBJeGACZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZmQCZnw1hN2PQlv3TukjQNPwmjYu02E7eRiBXfCKFq1vwJ/wwgbysURex6E1eSRnnBtI1LULQ6sXQzQuvmER2p7o6frWFwtcKOt/cUm3aUKlRDGY7W19/dwQJ0wbj/VGK2XitwEwlW1paOddTSqSTgbit2+lkZSx6EkPNlUmnnatfJlCGfRG0M1+2SX1NASdtX8NXL4EMJZ/FjtAHR3uHgTnlkjbaftG9j7p5VwPh4VVx2REfY9CaOCQNcJKOCr15sY4Ww8yntOrn8losHYkfF20DapDYkvxCcttxylP/9h12KgDoxxQ7HVdRJC8AZLO9Qvh4t10PkqneVX14oSKNXB06h0dorbauQotKwe9VaAkWAj8SBpVcslgXmMcbqmJUCEe7kOrc1SRmIMq5WdTJzkzqmLhgdg3dZX0w4RPBbBn9v2jqX+urBENsMkY+es7thD0Z8w7amJa417YYBwZ5tl8Wj+yrG8+smcrJKV6Mh1CKrCumozCem84cYFo6eT1wL1i8EwtfEB3NGpXw9NhKSxuQtBn4YAwpp+N7dl6m8Mf6FOx81QQDSNzSGEtV99VyywmYKupZpNMnCTIMklghulAXHEZA1X/jpM6Os5NpP5epj2x0kUsNHD8nxzIYjJxXa9koDrzp0LMxvYw8F/jzslTEZVdjA2wSbKDkX48ZvFTVO/Fv5MzFTJDZp4sSIMsQGL1HJ7KVihHDkMH8xsTq+jnIEdBAxCK2KclDdKEcr95sDpt1e+PJmN51c4wqIvb0INQYQ5I+fGW6vkhZCWXZMpzevGidkkPkrBhyE2Yf3mv0CF+1lHjj++ajaw+N9OFn341quEMiMRxtKBNyGsJBuubcM8DuZ6mj6KIsYw8duvLcbVgP7t3Da1n+5EunIXfX7KTP2x3ErZiye4pA2PPXqXmkT9ktljuhRmEWMwM7+VDYwk/EzB4atVQDc3dpbpNmA2Gz6AYIFeK8k11WyOFUKfn8lFZj+FMdH0IIRO1q13fNRNFZ8lgAPKPjqX2U9hFeVxWXscUYo6hdl+CiOx50w4yG2xpy7IATP9tCk7jPO523Z+kz11vwJCo5/CEsO1oBF627ypIfU4rGeSCMPK8WAx6MJ0TA67L1+ZSeyLb3I7Vwz7Vy0wlS/P2KWbDcz6bt0U6snfl9MjRe9kKLJ1dyozibJ24lIfhqLD2wfl9GxlP9EvMhb5jFg3RyIcmWSL7RnBaubdg1pJ3VtJtH8uo+VXI0tJTyJUhxwm/b5s073ShLUVBfGFDEe4uQAZdiq/qBCwDoOwPGDtJwXxpYxHuEEE6Uc2zU3HgQiryWflAfUkPpIBi0qu/jK6qex8RftgWKW/DEhhrfargghms0mfRJ1QbmaKKvyyOS9C+GbaR8yGopqoS++mO05WA3WjlaAU1mrPlCSuyJhRfZ1Ya3FTkVy4HeYCQnn6fSCgZjb7YDaHow1iHajaECXMi1xCqJD9Ggqom82HaJHKM1OokIfZjBBmNovRcQ4hfCacr6abzfeLJMw5hoITgN8JUmgxm0XIXvuGw8JwmxHCzGYRspspPGJAYDNCqtm8WRyh9aUMOOCgsBkh1Wwey+ivPm5R6ruHil6Lr7BOF3IHSWMzQpjZPN/6jlJ3FUnCsQUQyms0NiOEmg0poEb4b24Oobz2gRAQN5spaRJVwj/EF1heHYLDwp8oAXWzgZrNZUWEDyUhXoyCDfI5aQo1s9lPzIYyiSrhnyI+fgIFVfygfS8m1Wzeg9lURPijCI8+oAw285Y4hbrZwPL0U0WEP4vw2CP84eU1u7DCG6HZTBTCv0R0bOUNVfx79IC42UyqILwrgyNPR8Gz+NQ2I6QW3sBsvpIlUSH8TQZHDoLhWXxymxFSkwiFt88VEMolDbIDhvNTepsRwszmb6okZicLZElToc0IYYU3KrNRCP8jIp9mAPtgM5URqklMqvxEZqMQRhYrpajiFwkzm//SJDFrNJmaN0kVv0iY2dAsTzMrmszJDE0Vv0hY4e0bSRIz831mVSq/LrSKXyTMbH4gQJxkOql5bAHP4lPuezFVtRdOCGGuMB/GoC6v2YXtha/Ck5h20i8iplmGggeIycprdqlmA1X+cLPJLGiMp03oy2t2YWbzT3ASzZ2T+U4pDIjq+Wp44S3UbCamzxhOSlvFL1IVZgOEyWSoP2sC5bVHCwGsxGzMraEx3ZNX8Yukms0bErMxU6ivSRdpM0JolT8kiRNjFEY9jbCCKn6RqKv8ppHqLwZVUcUvEmY2IYU3Yy7UU1hNFb9IauEt3Gwm+nLGGIUVVfGLpJpNcJXfsBndSOGh4WrKa3ZRVvknRh/Vn2KHewEq3fdiIqzyG1OhfiCTPiS7aEK0yl8qiRPdR/XXD6us4heJrMqvbwujoZbCvvy/1ZXXcoSZTYnC23UK4cjQfAADZooqy2t2YYW3EjPGNWDiMsYrspDChduMkJpEKLx5J3GirdbMt4GWZjNC2F7Ye6M4z2AKaByKwon2cvhqehKl2fjOiTqg+ZzX8XJTqNlpkkQ/wIk2Bi96BqE8D13wek2R6jWwUfQ7bpsB/psAZo/T5HpmaSnUT2rkLsprXaPOg9hNA+MbRXjuTzjroz+ngJ0MoCRcxnoGI3zpTTh5+PpTCoi9cHhxy3N498eUD79zT773vKT5vqZPiDDnOxNuvf475Ts0XVRInsYssnyhS/VSKGa48l0qI9D6RLc8Mqz+NMYmZBh+cZrxtyZXCp/9/R9YeC9lZ1HDj/Vdlt5blxpf3i0Y8sTpxZIIsR1i4YS/tfX5q8Z3ig9BIagFv18K4LNsH43++ViAdzn9pPEVvQwLVZoPtSWkEclg9G36eYZhodv6PP2m40VP8hI4Vyf56Nvag8VCPhB9dP4W9OM3WqtfTZ9fTsxH8S+fT19Fps4crjBR7kQ///3eIvXLY6nzd5mWz/Tp1dXVdPrDXNOrr1+wj1y43cw2wv72NmjgfLfHWXGwG6iDrivfHfVe5lujoee/F7BXHHIBGvV6LZchM+77pE9qnfwKE28NRLN77X7ulT+jY2QT6KSTIeldQr56oqUl3n56NjY/cjEatsrSQSLbreHq4nW03UYb3uu0d1p7x7u7u9utdqPeC4NjsVgsFovFYrFYLNb/tf4HdhUi7mONxfIAAAAASUVORK5CYII="
            alt="Logo"
            className="h-10 cursor-pointer ml-4 lg:ml-20"
          />
        </Link>
        <h1 className="text-xl font-bold hidden lg:block">Research Lab</h1>
      </div>
      <ul
        className={`lg:flex space-x-4 font-semibold ${menuOpen ? "block" : "hidden"} lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent text-center lg:text-left transition-all duration-300 ease-in-out`}
      >
        <li><Link to="/" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Home</Link></li>
        <li><Link to="/about" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">About</Link></li>
        <li><Link to="/research" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Research</Link></li>
        <li><Link to="/publications" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Publications</Link></li>
        <li><Link to="/laboratory" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Laboratory</Link></li>
        <li><Link to="/gallery" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Gallery</Link></li>
        <li><Link to="/students" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Students</Link></li>
        <li><Link to="/contact" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Contact</Link></li>
      </ul>
      <button
        className="lg:hidden text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </button>
    </nav>
  );
}
