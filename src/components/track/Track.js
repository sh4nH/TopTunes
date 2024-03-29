import styles from "./Track.module.css";

const Track = ({ data, addToPlaylist, removeFromPlaylist, origin }) => {
  const artistArray = data?.artists?.map((artist) => artist.name) || [];
  const artists = artistArray.join(", ");

  const clickHandler = () => {
    if (origin === "tracklist") {
      addToPlaylist(data);
    } else {
      removeFromPlaylist(data.id);
    }
  };

  return (
    <div key={data.id} className={styles.track}>
      <div className={styles.info}>
        <img src={data.album.images[2].url} alt={data.name} />
        <div className={styles.trackinfo}>
          <h4>{data.name}</h4>
          <p>{artists}</p>
        </div>
      </div>
      <div className={styles.btns}>
        <button onClick={clickHandler}>
          {origin === "tracklist" ? "+" : "-"}
        </button>
      </div>
    </div>
  );
};

export default Track;
