//============== React & Next ================
import Link from "next/link";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
//================= redux ====================
function NavLink({ name, pathname ,onClick}) {
  const href = name === "Home" ? "/" : `/${name}`;
  const isActive =
    name === "Home"
      ? pathname === "/"
        ? "active"
        : ""
      : pathname === `/${name}`
      ? "active"
      : "";
  return (
    <>
      <style jsx>{`
        .active {
          border-bottom: 2px solid var(--main);
        }
      `}</style>
      <li className={isActive} onClick={onClick}>
        <Link href={href}>{name}</Link>
      </li>
    </>
  );
}

export default NavLink;
