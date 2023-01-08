function superbowlWin(record) {
    const findYear = record.find(foo => foo.result === "W");
    if (findYear) {
        return findYear.year;
    }
}

