# Process Date and Time

### year

`year(date)` Get the year, for example `year(today())` will be `2022`.

### quarter

`quarter(date)` Get the quarter, for example `quarter(today())` will be `1` if it's in Q1.

### month

`month(date)` Get the month, for example `month(today())` will be `2` if it's Feb.

### day

`day(date)` Get the day in the month.

### weekday

`weekday(date)` Get the day of the week. Monday is 1. Sunday is 7.

### day_of_year

`day_of_year(date)` Get the number of the day of the year (1-366).

### hour

`hour(datetime)`

Get the hour of the datetime.

### minute

`minute(datetime)`

Get the minute of the datetime.

### second

`second(datetime)`

Get the second of the datetime.

### to_unix_timestamp

Get the UNIX timestamp of the datetime. Returns a number in `uint32`

For example `to_unix_timestamp(now())` gets `1644272032`

### to_start_of_year

`to_start_of_year(date)`

Rounds down a date or date with time to the first day of the year. Returns the date.

### to_start_of_quarter

`to_start_of_quarter(date)`

Rounds down a date or date with time to the first day of the quarter. Returns the date.

### to_start_of_month

`to_start_of_month(date)`

Rounds down a date or date with time to the first day of the month. Returns the date.

### to_start_of_day

`to_start_of_day(date)`

Rounds down a date with time to the start of the day.

### to_start_of_hour

`to_start_of_hour(datetime)`

Rounds down a date or date with time to the start of the hour.

### to_start_of_minute

`to_start_of_minute(datetime)`

Rounds down a date or date with time to the start of the minute.

### to_start_of_second

`to_start_of_second(datetime64)`

Rounds down a date or date with time to the start of the second.

Unlike other `to_start_of_` functions, this function expects a datetime with millisecond, such as `to_start_of_second(now64())`

### to_date

`to_date(string)` convert a date string to a date type, e.g. `to_date('1953-11-02')`

### to_datetime

`to_datetime(value)` convert the value to a datetime type, e.g. `to_datetime(1655265661)` or `to_datetime(today())`

### today

`today()`

Returns the current date.

### to_YYYYMM

`to_YYYYMM(date)`

Get a number. For example `to_YYYYMM(today())` will get the number `202202`

### to_YYYYMMDD

`to_YYYYMMDD(date)`

Get a number.

### to_YYYYMMDDhhmmss

`to_YYYYMMDDhhmmss(date)`

Get a number.

### to_timezone

`to_timezone(datetime_in_a_timezone,target_timezone)` Convert the datetime from one timezone to the other.

For the full list of possible time zones, please check "TZ database name" column in [the wikipedia page](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For the common time zones, pls check [to_time](#to_time)

For example, 

```sql
SELECT
  to_time('2022-05-16', 'America/New_York') AS t1, to_timezone(t1, 'UTC') AS t2
```

Output: 

| t1                      | t2                      |
| ----------------------- | ----------------------- |
| 2022-05-16 00:00:00.000 | 2022-05-16 04:00:00.000 |



### format_datetime

`format_datetime(time,format,timezone)`

Format the datetime as a string. The 3rd argument is optional. The following placeholders are supported

| Placeholder | Description                                        | Output String |
| ----------- | -------------------------------------------------- | ------------- |
| %Y          | Year with 4 digits                                 | 2022          |
| %y          | Year with 2 digits                                 | 22            |
| %m          | Month with 2 digits                                | 01            |
| %d          | Day with 2 digits                                  | 02            |
| %F          | short YYYY-MM-DD date, equivalent to %Y-%m-%d      | 2022-01-02    |
| %D          | short MM/DD/YY date, equivalent to %m/%d/%y        | 01/02/22      |
| %H          | Hour with 2 digits (00-23)                         | 13            |
| %M          | Minute with 2 digits (00-59)                       | 44            |
| %S          | Second with 2 digits (00-59)                       | 44            |
| %w          | Weekday as a decimal number with Sunday as 0 (0-6) | 1             |



### date_diff

`date_diff(unit,begin,end)`

Calculate the difference between `begin` and `end` and produce a number in `unit`. For example `date_diff('second',window_start,window_end)`

### date_diff_within

`date_diff_within(timegap,time1, time2)`

Return true or false.  This function only works in [stream-to-stream join](query-syntax#stream_stream_join). Check whether the gap between `time1` and `time2` are within the specific range. For example `date_diff_within(10s,payment.time,notification.time)` to check whether the payment time and notification time are within 10 seconds or less.

### date_trunc

`date_trunc(unit, value[, timezone])`Truncates date and time data to the specified part of date. For example, `date_trunc('month',now())` to get the datetime at the beginning of the current month. Possible unit values are:

* year
* quarter
* month
* day
* hour
* minute
* second

### date_add

It supports both `date_add(unit, value, date)` and a shortcut solution `data_add(date,timeExpression)`

*  `date_add(HOUR, 2, now())` will get a new datetime in 2 hours, while `date_add(HOUR, -2, now())` will get a new datetime 2 hours back.
*  `date_add(now(),2h)` and `date_add(now(),-2h)` also work

### date_sub

It supports both `date_sub(unit, value, date)` and a shortcut solution `data_sub(date,timeExpression)`

*  `date_sub(HOUR, 2, now())` will get a new datetime 2 hours back
*  `date_sub(now(),2h)`  also work

### earliest_timestamp

`earliest_timestamp()` returns `"1970-1-1 00:00:00"`

### earliest_ts

`earliest_ts()` shortcut for `earliest_timestamp()`