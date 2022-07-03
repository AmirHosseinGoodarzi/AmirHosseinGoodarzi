//============== React & Next ================
import React from "react";
import styles from "./Installation.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
import toast from "react-hot-toast";
//================= redux ====================
//============================================
function Installation({ title, command }) {
  const copy = () => {
    navigator.clipboard.writeText("yarn add "+command);
    toast.success("Command copied to clipboard!");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_wrapper}>
          <div className={styles.title}>{title}</div>
          <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
            <div className="relative flex -mr-2">
              <button
                type="button"
                className="text-slate-500 hover:text-slate-400"
                onClick={copy}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                  <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
            <code className="flex-none min-w-full p-5">
              <span className="flex">
                <svg
                  viewBox="0 -9 3 24"
                  aria-hidden="true"
                  className="flex-none overflow-visible text-red-400 w-auto h-6 mr-3"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="flex-auto" style={{color:"var(--light)"}}>yarn add {command}</span>
              </span>
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default Installation;
