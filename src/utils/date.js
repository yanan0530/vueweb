export const calcDate = (date1, date2) => {
	var date3 = date2 - date1

	var days = Math.floor(date3 / (24 * 3600 * 1000))

	var leave1 = date3 % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
	var hours = Math.floor(leave1 / (3600 * 1000))

	var leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
	var minutes = Math.floor(leave2 / (60 * 1000))

	var leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
	var seconds = Math.round(date3 / 1000)
	return {
		leave1,
		leave2,
		leave3,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	}
}

/**
 * 日期格式化
 */
export function dateFormat(date) {
	let format = 'yyyy-MM-dd hh:mm:ss'
	if (date !== 'Invalid Date') {
		var o = {
			'M+': date.getMonth() + 1, // month
			'd+': date.getDate(), // day
			'h+': date.getHours(), // hour
			'm+': date.getMinutes(), // minute
			's+': date.getSeconds(), // second
			'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
			'S': date.getMilliseconds() // millisecond
		}
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1,
				(date.getFullYear() + '').substr(4 - RegExp.$1.length))
		}
		for (var k in o) {
			if (new RegExp('(' + k + ')').test(format)) {
				format = format.replace(RegExp.$1,
					RegExp.$1.length === 1 ? o[k] :
					('00' + o[k]).substr(('' + o[k]).length))
			}
		}
		return format
	}
	return ''
}
export function dateObj(date = null) {
	if (date) {
		data = new Date(date)
	} else {
		date = new Date()
	}
	let year = date.getFullYear()
	let month = date.getMonth()+1;
	
	month=timeStr0(month)
	let day = date.getDate()
	day=timeStr0(day)
	//周几
	let e = date.getDay()
	if (e === 0) {
		e = 7
	}
	
	
	
	//第几周
	let week = Math.ceil((day + 6 - e) / 7) - 1;
	if (week == 0) {
		let dateLast = new Date();
		let dayLast = new Date(dateLast.getFullYear(), dateLast.getMonth(), 0).getDate();
		let timestamp = new Date(new Date().getFullYear(), new Date().getMonth() - 1, dayLast);
		week = getWeekFromDate(new Date(timestamp));
	}
	//获取时间:
	// let a = date.getMinutes()
	let hh = date.getSeconds()
	return {
		year,
		month
		,week,
		day,
		e,
		hh,
	}
}

function getWeekFromDate(date) {
	// 将字符串转为标准时间格式
	let w = date.getDay(); //周几
	if (w === 0) {
		w = 7;
	}
	let week = Math.ceil((date.getDate() + 6 - w) / 7) - 1;
	return week;
}
//根据时间 获取月的
export function dateMonth(date = "") {
	if (date) {
		date = new Date(date)
	} else {
		date = new Date()
	}
	let yyyy = date.getFullYear()
	let month = date.getMonth() + 1;
	let allDay = new Date(Number(yyyy), Number(month), 0).getDate()
	let m=timeStr0(month)
	
	let startTime=`${yyyy}-${m}-01 00:00:00`
	let endTime=`${yyyy}-${m}-${allDay} 23:59:59`
	return {
		startTime,
		endTime
	}
}
export function dateWeek(date = "") {
	if (date) {
		date = new Date(date)
	} else {
		date = new Date()
	}
	//获取周几
	let e = date.getDay()
	let timestamp = date.getTime()
	let timestampStart = new Date(timestamp - Number(e) * 24 * 60 * 60 * 1000)
	let timestampEnd = new Date(timestamp + Number((6 - e)) * 24 * 60 * 60 * 1000)
	let mStart = timestampStart.getMonth() + 1
	if (mStart < 10) {
		mStart = "0" + mStart
	}
	let dStart = timestampStart.getDate()

	let mEnd = timestampEnd.getMonth() + 1
	if (mEnd < 10) {
		mEnd = "0" + mEnd
	}
	let startTime = (
		(timestampStart.getFullYear()) +
		"-" +
		mStart +
		"-" +
		(timeStr0(timestampStart.getDate())) +
		" 00:00:00"
	)
	let endTime = (
		(timestampEnd.getFullYear()) +
		"-" +
		(mEnd) +
		"-" +
		(timeStr0(timestampEnd.getDate())) +
		" 23:59:59"
	)
	return {
		startTime,
		endTime
	}
}
//获取日期
export function dateDay(date){
	if (date) {
		date = new Date(date)
	} else {
		date = new Date()
	}
	let yyyy = date.getFullYear()
	let month =  timeStr0(date.getMonth()+1);
	let day = timeStr0(date.getDate())
	let startTime=`${yyyy}-${month}-${day} 00:00:00`
	let endTime=`${yyyy}-${month}-${day} 23:59:59`
	return {
		startTime,
		endTime
	}
}



function timeStr0(number) {
	if (number < 10) {
		return "0" + number
	} else {
		return number
	}
}
