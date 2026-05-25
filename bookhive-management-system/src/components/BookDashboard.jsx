import { useEffect, useState } from "react";
import API from "../services/api";
import { Search, Plus, X } from "lucide-react";

const BookDashboard = () => {

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");

  const [loading, setLoading] = useState(false);

  // ================= MODAL STATES =================
  const [showModal, setShowModal] = useState(false);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editBookId, setEditBookId] = useState(null);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  // ================= FETCH BOOKS =================
  const fetchBooks = async () => {

    try {

      setLoading(true);

      const response = await API.get("/books");

      console.log("Fetched Books:", response.data);

      setBooks(response.data);
      setFilteredBooks(response.data);

    } catch (error) {

      console.log("Error fetching books:", error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ================= ADD BOOK =================
  const handleAddBook = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/books", newBook);

      setBooks((prev) => [...prev, response.data]);

      setShowModal(false);

      setNewBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });

    } catch (error) {

      console.log("Error adding book:", error);

    }
  };

  // ================= DELETE BOOK =================
  const handleDeleteBook = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/books/${id}`);

      const updatedBooks = books.filter(
        (book) => book.id !== id
      );

      setBooks(updatedBooks);

    } catch (error) {

      console.log("Error deleting book:", error);

    }
  };

  // ================= EDIT BOOK =================
  const handleEditClick = (book) => {

    setIsEditMode(true);

    setEditBookId(book.id);

    setNewBook({
      title: book.title,
      author: book.author,
      genre: book.genre,
      year: book.year,
    });

    setShowModal(true);
  };

  // ================= UPDATE BOOK =================
  const handleUpdateBook = async (e) => {

    e.preventDefault();

    try {

      const response = await API.put(
        `/books/${editBookId}`,
        newBook
      );

      const updatedBooks = books.map((book) =>
        book.id === editBookId
          ? response.data
          : book
      );

      setBooks(updatedBooks);

      setShowModal(false);

      setIsEditMode(false);

      setEditBookId(null);

      setNewBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });

    } catch (error) {

      console.log("Error updating book:", error);

    }
  };

  // ================= SEARCH & FILTER =================
  useEffect(() => {

    let updatedBooks = [...books];

    // SEARCH
    updatedBooks = updatedBooks.filter(
      (book) =>
        book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // FILTER
    if (genre !== "All") {

      updatedBooks = updatedBooks.filter(
        (book) =>
          book.genre?.toLowerCase() === genre.toLowerCase()
      );

    }

    setFilteredBooks(updatedBooks);

  }, [searchTerm, genre, books]);

  return (

    <section className="py-20 px-6 bg-[#f8f7ff]">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h2 className="text-4xl font-black text-gray-900">
              📚 Book Dashboard
            </h2>

            <p className="text-gray-500 mt-2">
              Manage your complete digital library
            </p>

          </div>

          {/* ADD BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition duration-300 shadow-md"
          >

            <Plus size={20} />
            Add Book

          </button>

        </div>

        {/* ================= SEARCH & FILTER ================= */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">

          {/* SEARCH */}
          <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4 flex items-center gap-3 shadow-sm">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full outline-none bg-transparent text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>

          {/* FILTER */}
          <select
            className="bg-white rounded-2xl border border-gray-100 px-5 py-4 shadow-sm outline-none text-gray-700"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >

            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Self Help">Self Help</option>
            <option value="Finance">Finance</option>
            <option value="History">History</option>
            <option value="Fiction">Fiction</option>

          </select>

        </div>

        {/* ================= LOADING ================= */}
        {loading ? (

          <div className="text-center py-20">

            <h2 className="text-2xl font-bold text-violet-700">
              Loading Books...
            </h2>

          </div>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredBooks.length > 0 ? (

              filteredBooks.map((book) => (

                <div
                  key={book.id}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >

                  {/* GENRE */}
                  <div className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {book.genre}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-black text-gray-900">
                    {book.title}
                  </h3>

                  {/* AUTHOR */}
                  <p className="mt-3 text-gray-600 font-medium">
                    ✍️ {book.author}
                  </p>

                  {/* YEAR */}
                  <p className="mt-1 text-gray-500">
                    📅 {book.year}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() => handleEditClick(book)}
                      className="flex-1 bg-violet-100 hover:bg-violet-200 text-violet-700 py-3 rounded-2xl font-bold transition duration-300"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="flex-1 bg-red-100 hover:bg-red-200 text-red-600 py-3 rounded-2xl font-bold transition duration-300"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))

            ) : (

              <div className="col-span-full text-center py-20">

                <h2 className="text-3xl font-black text-gray-700">
                  No Books Found 📚
                </h2>

                <p className="text-gray-500 mt-3">
                  Try changing search or filter
                </p>

              </div>

            )}

          </div>

        )}

      </div>

      {/* ================= MODAL ================= */}
      {showModal && (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => {

                setShowModal(false);

                setIsEditMode(false);

                setEditBookId(null);

                setNewBook({
                  title: "",
                  author: "",
                  genre: "",
                  year: "",
                });

              }}
              className="absolute top-5 right-5 text-gray-500 hover:text-red-500"
            >
              <X />
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              {isEditMode ? "Edit Book" : "Add New Book"}
            </h2>

            <p className="text-gray-500 mb-8">
              Manage your digital library collection
            </p>

            {/* FORM */}
            <form
              onSubmit={
                isEditMode
                  ? handleUpdateBook
                  : handleAddBook
              }
              className="space-y-5"
            >

              {/* TITLE */}
              <input
                type="text"
                placeholder="Book Title"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-violet-500"
                value={newBook.title}
                onChange={(e) =>
                  setNewBook({ ...newBook, title: e.target.value })
                }
              />

              {/* AUTHOR */}
              <input
                type="text"
                placeholder="Author Name"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-violet-500"
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
              />

              {/* GENRE */}
              <input
                type="text"
                placeholder="Genre"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-violet-500"
                value={newBook.genre}
                onChange={(e) =>
                  setNewBook({ ...newBook, genre: e.target.value })
                }
              />

              {/* YEAR */}
              <input
                type="text"
                placeholder="Publication Year"
                required
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-violet-500"
                value={newBook.year}
                onChange={(e) =>
                  setNewBook({ ...newBook, year: e.target.value })
                }
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition duration-300"
              >
                {isEditMode ? "Update Book" : "Save Book"}
              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
};

export default BookDashboard;