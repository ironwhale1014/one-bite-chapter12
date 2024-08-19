import moment from "moment-timezone";

const dateToString = (date) => {
    return moment(date).format("YYYY-MM-DD");
}

export default dateToString;