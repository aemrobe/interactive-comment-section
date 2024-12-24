export default function App() {
  return (
    <div className="app">
      <Comment />
      <div className="replies">
        <Comment />
        <Comment />
      </div>
      <AddComment />
      <Footer />
    </div>
  );
}

const URL = process.env.PUBLIC_URL;

function AddComment() {
  return (
    <form className="add-comment">
      <input type="text" placeholder="Add a comment..." />
      <img
        className="comment__user-image"
        src={`${URL}/images/avatars/image-amyrobson.png`}
        alt="the user who puts the comment"
      />
      <button>Send</button>
    </form>
  );
}

function Comment() {
  return (
    <div className="comment">
      {/* vote on comment button */}
      <button className="comment__vote-btn">
        <img
          className="comment__upvote"
          src={`${URL}/images/icon-plus.svg`}
          alt=" upvote on the comment"
        />

        <span className="comment__vote">12</span>

        <img
          src={`${URL}/images/icon-minus.svg`}
          alt=" downvote on the comment"
          className="comment__upvote"
        />
      </button>

      {/* comment content */}
      <div className="comment__content">
        <div className="comment__heading">
          <img
            className="comment__user-image"
            src={`${URL}/images/avatars/image-amyrobson.png`}
            alt="the user who puts the comment"
          />
          <h2 className="comment__user-name">amyrobson</h2>
          <p className="comment__you hidden">you</p>
          <p className="comment__created-time">1 month ago</p>
        </div>

        <p className="comment__text">
          <span className="comment__usertobe-replied">@maxblagun</span>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>

      {/* Reply button */}
      <TextBtn className="text-btn hidden" textColor={"var(--moderate-blue)"}>
        <img src={`${URL}/images/icon-reply.svg`} alt="" />
        Reply
      </TextBtn>

      {/* Delete button */}
      <TextBtn
        className="text-btn margin-left-1 margin-right-1"
        textColor={"var(--soft-red)"}
      >
        <img src={`${URL}/images/icon-delete.svg`} alt="" />
        Delete
      </TextBtn>

      {/* Edit button */}
      <TextBtn className="text-btn " textColor={"var(--moderate-blue)"}>
        <img src={`${URL}/images/icon-edit.svg`} alt="" />
        Edit
      </TextBtn>
    </div>
  );
}

function TextBtn({ children, textColor, className }) {
  const textBtnStyle = {
    color: textColor,
  };

  return (
    <button style={textBtnStyle} className={className}>
      {children}
    </button>
  );
}

function Footer() {
  return (
    <div className="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel=" nonopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/aemrobe">Aemro Bekalu</a>.
    </div>
  );
}

/*<div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div>*/
