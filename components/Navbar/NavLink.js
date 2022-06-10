//============== React & Next ================
import Link from "next/link";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
//================= redux ====================
function NavLink({ name, href,active, onClick }) {
  return (
    <>
      <style jsx>{`
        .active {
          border-bottom: 2px solid var(--main);
        }
      `}</style>
      <li className={active ? "active" : ""} onClick={onClick}>
        <Link href={href}>{name}</Link>
      </li>
    </>
  );
}

export default NavLink;
