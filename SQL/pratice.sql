SELECT DAY(admission_date) AS day_number,
       COUNT(*) AS number_of_admission
FROM admissions
GROUP BY DAY(admission_date)
order by number_of_admission desc;