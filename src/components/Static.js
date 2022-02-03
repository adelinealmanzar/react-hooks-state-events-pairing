function Static({ src, title, views, date }) {
    return (
        <>
            <iframe
                width="919"
                height="525"
                src={src}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h2>{title}</h2>
            <small>{views} Views | Uploaded {date}</small>
        </>
    )
  }

export default Static;