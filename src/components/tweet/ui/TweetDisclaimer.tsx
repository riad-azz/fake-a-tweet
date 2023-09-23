import { CgDanger } from "react-icons/cg";

const TweetDisclaimer = () => {
  return (
    <div className="tooltip-container">
      <span className="danger-sign">
        <CgDanger />
      </span>
      <div className="tooltip">
        <p>
          <strong>Disclaimer:</strong> This tool is intended for entertainment
          and educational purposes only. The generated fake tweets should not be
          used to impersonate or deceive others. The creators of this
          application are not responsible for any misuse or consequences that
          may arise from the use of the generated content. Users are encouraged
          to use this tool responsibly and in compliance with all applicable
          laws and regulations.
        </p>
      </div>
    </div>
  );
};

export default TweetDisclaimer;
