import Footer from "./Footer";
import Nav from "./Nav";
import "../styles/Holidays.css";    

const Holidays = () => {

    const holidays = [
        {
            id: 1,
            title: "Christmas",
            duration: "2 days",
            date: "25th - 26th December"
        },
        {
            id: 2,
            title: "New Year",
            duration: "1 day",
            date: "1st January"
        },
        {
            id: 3,
            title: "Independence Day",
            duration: "1 day",
            date: "1st October"
        },
        {
            id: 4,
            title: "Workers Day",
            duration: "1 day",
            date: "1st May"
        },
        {
            id: 5,
            title: "Children`s Day",
            duration: "1 day",
            date: "27th May"
        }
    ];

    return (
        <div>
            <Nav />

            <div className="holidays-section font-serif">
                <h1 className="text-3xl font-serif font-bold">Your Holiday`s</h1>

                <table>
                    <thead>
                        <tr>
                            <th>S/No</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {holidays.map((holiday) => (
                            <tr key={holiday.id}>
                                <td>{holiday.id}</td>
                                <td>{holiday.title}</td>
                                <td>{holiday.duration}</td>
                                <td>{holiday.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer />  
        </div>
    );
}

export default Holidays;