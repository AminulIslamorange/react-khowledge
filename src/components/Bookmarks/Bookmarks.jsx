import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100">
            <div><h3 className="text-2xl">Reading Time:{readingTime}</h3></div>
            <h1 className="text-center">Bookmarked Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=>
                <Bookmark key={bookmark.id}
                    bookmark={bookmark}>

                    </Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;