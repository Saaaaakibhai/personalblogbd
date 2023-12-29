export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/15012299/pexels-photo-15012299/free-photo-of-top-view-shot-of-sea-waves-crashing-the-sandy-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=" "
        />
      </div>
      <div className="texts">
        <h2>Sea Breach Blog</h2>
        <p className="info">
          <a className="author">Tahmidul Munem</a>
          <timne>2023-02-06 12.45pm</timne>
        </p>
        <p className="summary">
          WOW so good and testy looks awesome having fun with this water melon
        </p>
      </div>
    </div>
  );
}
