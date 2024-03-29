import Track from "../track/Track";
import styles from "./Tracklist.module.css";

const Tracklist = ({ data, addToPlaylist }) => {
  return (
    <div className={styles.tracklist}>
      <h2>Your Top 20 Songs</h2>
      {data !== undefined ? (
        data.map((track, index) => (
          <Track
            key={track.id}
            data={data[index]}
            addToPlaylist={addToPlaylist}
            origin="tracklist"
          />
        ))
      ) : (
        <h3>No Songs found.</h3>
      )}
    </div>
  );
};

export default Tracklist;
