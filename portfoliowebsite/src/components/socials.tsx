import "../index.css"

const Socials = () => {
  return (
    <div className="socials">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/wendel-van-brusselen-landuyt-4a76622b6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.357c.69-.948 1.807-1.557 3-1.557 2.209 0 4 1.791 4 4v6.2z" />
        </svg>
        <span>LinkedIn</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/wendelvbl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.833 2.807 1.304 3.49.997.108-.776.419-1.304.762-1.604-2.665-.304-5.467-1.333-5.467-5.93 0-1.312.469-2.382 1.237-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.987-.4 3.008-.405 1.02.005 2.048.138 3.008.405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.651.241 2.873.118 3.176.77.838 1.237 1.908 1.237 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.291 0 .319.19.694.798.577 4.764-1.586 8.2-6.083 8.2-11.385 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>GitHub</span>
      </a>
    </div>
  );
};


export default Socials;
