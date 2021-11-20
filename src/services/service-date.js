class serviceDate {
    // MONTH FORMAT
    monthFormat = [{
            full_name: "January",
            abbrev: "Jan",
        },
        {
            full_name: "February",
            abbrev: "Feb",
        },
        {
            full_name: "March",
            abbrev: "Mar",
        },
        {
            full_name: "April",
            abbrev: "Apr",
        },
        {
            full_name: "May",
            abbrev: "May",
        },
        {
            full_name: "June",
            abbrev: "Jun",
        },
        {
            full_name: "July",
            abbrev: "Jul",
        },
        {
            full_name: "August",
            abbrev: "Aug",
        },
        {
            full_name: "September",
            abbrev: "Sept",
        },
        {
            full_name: "October",
            abbrev: "Oct",
        },
        {
            full_name: "November",
            abbrev: "Nov",
        },
        {
            full_name: "December",
            abbrev: "Dec",
        },
    ];

    // FORMAT DATE IN READABLE FORM
    monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    shortMonthList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    getFormattedDate(date_param) {
        let date = new Date(date_param);
        let currentDate = Date.now();
        const second_difference = (currentDate - date) * 1000;
        const minute_difference = Math.ceil(second_difference / 60);
        const hour_difference = Math.ceil(minute_difference / 60);
        const day_difference = Math.ceil(hour_difference / 24);

        if (second_difference < 59) return `${second_difference}s`;
        if (minute_difference < 59) return `${minute_difference}min`;
        if (hour_difference < 24) return `${hour_difference}h`;
        if (day_difference < 28) return `${day_difference}d`;
        else return this.getShortReadableDate(date_param);

    }

    getMinutesPerSeconds(time) {
        let minutes = Math.trunc(Math.round(time) / 60);
        let minutes_in_secs = minutes * 60;
        let seconds = Math.round(time) - minutes_in_secs;
        return `${minutes}m:${seconds}s`;
    }

    getReadableDate(date_string) {
        let date_list = date_string.split("-");
        let day = date_list[0];
        let month = Number(date_list[1]) - 1;
        let year = date_list[2];

        let new_month = this.monthList[month];

        return `${day} ${new_month}, ${year}`;
    }

    getShortReadableDate(date_string) {
        let date_list = date_string.split("-");
        let year = date_list[0];
        let month = Number(date_list[1]) - 1;
        let day_split = date_list[2].split(" ");
        let day = day_split[0];
        let new_month = this.shortMonthList[month];

        return `${day} ${new_month}, ${year}`;
    }

    // TWELVE HOURS TIME
    twelveHoursTime(time_string) {
        let time_list = time_string.split(":");
        let hour, minute, meridian;
        minute = time_list[1];

        if (Number(time_list[0]) > 12) {
            hour = Number(time_list[0]) - 12;
            meridian = "PM";
        } else if (Number(time_list[0]) === 12) {
            hour = 12;
            meridian = "PM";
        } else {
            hour = time_list[0];
            meridian = "AM";
        }

        return `${hour}:${minute} ${meridian}`;
    }

    approximate(digit) {
        Math.floor(digit);
    }

    // CONVERT DATE TO TIME STAMP AND COMPARE TO CURRENT
    getRelativeTime(formattedDate) {
        const timeStamp = new Date(formattedDate * 1000);

        const differenceInSeconds = (Date.now() - timeStamp) / 1000;
        const differenceInMinutes = differenceInSeconds / 60;
        const differenceInHours = differenceInMinutes / 60;
        const differenceInDays = differenceInHours / 24;

        // GET MONTHS IF DAYS IS GREATER THAN OR EQUAL TO 30
        if (differenceInDays >= 30) {
            if (differenceInDays === 30) return `1 month ago`;
            return `${this.approximate(differenceInDays / 30)} months ago`;
        }

        // GET DAYS IF HOURS IS GREATER THAN OR EQUAL TO 24
        if (differenceInHours >= 24) {
            if (differenceInHours === 24) return `1 day ago`;
            return `${this.approximate(differenceInHours / 24)} days ago`;
        }

        //Get HOURS IF MINUTES IS GREATER OR EQUAL TO 60
        if (differenceInMinutes >= 60) {
            if (differenceInMinutes === 60) return `1 hour ago`;
            return `${this.approximate(differenceInMinutes / 60)} hours ago`;
        }

        //GET MINUTES IF SECONDS IS GREATER OR EQUAL TO 60
        if (differenceInSeconds >= 60) {
            if (differenceInSeconds === 60) return `1 minute ago`;
            return `${this.approximate(differenceInSeconds / 60)} minutes ago`;
        }

        //GET SECONDS IF LESS THAN A MINTE
        if (differenceInSeconds < 60) {
            return `${this.approximate(differenceInSeconds)} seconds ago`;
        }
    }

}

export const $serviceDate = new serviceDate();