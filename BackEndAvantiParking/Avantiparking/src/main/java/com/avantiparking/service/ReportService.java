package com.avantiparking.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avantiparking.model.Reserve_detail;
import com.avantiparking.repository.Reserve_Repository;
import com.avantiparking.repository.Reserve_detail_Repository;
import com.avantiparking.repository.Space_Repository;
import com.avantiparking.repository.UserRepository;

@Service
public class ReportService {

	@Autowired
	public Space_Repository space_repository;

	@Autowired
	private UserRepository user_repository;

	@Autowired
	private Reserve_Repository reserve_repository;

	@Autowired
	private Reserve_detail_Repository reserve_detail_Repository;

	public ReportService() {

	}

	public List<Reserve_detail> generateReport(String date1, String date2) {

		List<Reserve_detail> reportForReserveDetailAll = new LinkedList<Reserve_detail>();

		Date _date1;
		Date _date2;

		java.sql.Date InitDate;
		java.sql.Date FinalDate;

		try {
			DateFormat fecha1 = new SimpleDateFormat("yyyy-MM-dd");
			DateFormat fecha2 = new SimpleDateFormat("yyyy-MM-dd");
			_date1 = fecha1.parse(date1);
			_date2 = fecha2.parse(date2);

			_date1 = sumarRestarDiasFecha(_date1, -1);
			_date2 = sumarRestarDiasFecha(_date2, 1);
			
			InitDate = convert(_date1);
			FinalDate = convert(_date2);

		} catch (Exception e) {
			return null;
		}

		if (InitDate.before(FinalDate) || InitDate.equals(FinalDate)) {

			List<Reserve_detail> reserve_details = reserve_detail_Repository.findAll();
			// Reserve all in this date
			for (Reserve_detail i : reserve_details) {
				
					if ((i.getDate().after(InitDate) || i.getDate().equals(InitDate))
							&& (i.getDate().before(FinalDate) || i.getDate().equals(FinalDate))) {
						reportForReserveDetailAll.add(i);
					}
				
			}

			return reportForReserveDetailAll;
		}

		return null;
	}

	public Date sumarRestarDiasFecha(Date fecha, int dias) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(fecha);
		calendar.add(Calendar.DAY_OF_YEAR, dias);
		return calendar.getTime();
	}

	private java.sql.Date convert(java.util.Date uDate) {
		java.sql.Date sDate = new java.sql.Date(uDate.getTime());
		return sDate;
	}
}
