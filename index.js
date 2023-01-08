function superbowlWin(record) {
    //if record.find(foo => foo.result === "W")
    const findYear = record.find(foo => foo.result === "W");
    if (findYear) {
        return findYear.year;
    }
}

