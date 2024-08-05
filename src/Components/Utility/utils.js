//function to formate the date and time
export const formatDateTime = (launchDate) => {
    const date = new Date(launchDate);

    // Extract month, day, hour, and minute
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const hour = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minute = String(date.getMinutes()).padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    // Construct the formatted date string
    return `${month} ${day}, ${String(hour).padStart(2, '0')}:${minute} ${ampm}`;
}

