const DAYS_OF_WEEK = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const TIME_SLOTS = {
  morning:   ['6:00 AM – 7:00 AM','7:00 AM – 8:00 AM','8:00 AM – 9:00 AM','9:00 AM – 10:00 AM','10:00 AM – 11:00 AM','11:00 AM – 12:00 PM'],
  afternoon: ['12:00 PM – 1:00 PM','1:00 PM – 2:00 PM','2:00 PM – 3:00 PM','3:00 PM – 4:00 PM','4:00 PM – 5:00 PM','5:00 PM – 6:00 PM'],
  evening:   ['6:00 PM – 7:00 PM','7:00 PM – 8:00 PM','8:00 PM – 9:00 PM','9:00 PM – 10:00 PM','10:00 PM – 11:00 PM','11:00 PM – 12:00 AM'],
  night:     ['10:00 PM – 11:00 PM','11:00 PM – 12:00 AM','12:00 AM – 1:00 AM'],
};

const FOCUS_TOPICS = {
  exams:       ['Exam revision – Chapter review','Practice problems / past papers','Formula sheet / note-making','Mock test / self-quiz','Weak topic deep-dive','Concept clarification'],
  assignments: ['Assignment writing','Code lab / project work','Research & reference reading','Presentation prep','Peer review & corrections','Documentation'],
  cgpa:        ['Core subject study','Problem-solving practice','Previous year questions','Notes & summaries','Group study / discussion','Quick concept review'],
  balance:     ['DSA / Coding practice','Core subject review','Personal project work','Skill learning (online course)','Revision / flashcards','Career prep (resume/portfolio)'],
};

const TIPS = {
  exams:       ['Use the Pomodoro technique: 25 min focus, 5 min break','Solve 5-10 previous year questions per subject each week','Make a formula/concept cheat sheet per subject','Prioritize subjects where you are weakest first'],
  assignments: ['Break large assignments into smaller daily tasks','The 2-minute rule: if it takes under 2 min, do it now','Submit at least 2 days early to allow revisions','Keep a running list of all pending tasks and update it daily'],
  cgpa:        ['Attending all classes reduces exam prep time significantly','Take handwritten notes to improve long-term retention','Form a small study group for hard subjects','Visit professors during office hours when stuck'],
  balance:     ['Block coding practice time as non-negotiable in your schedule','Use weekends for personal projects and skill building','Set a weekly goal: at least 1 LeetCode problem per day','Link your learnings to real mini-projects on GitHub'],
};

const SLOT_CLASSES = {
  morning: 'slot-morning', afternoon: 'slot-afternoon', evening: 'slot-evening', night: 'slot-evening'
};

function generateSchedule() {
  var hours    = parseInt(document.getElementById('hoursPerDay').value);
  var days     = parseInt(document.getElementById('daysPerWeek').value);
  var goal     = document.getElementById('goal').value;
  var prefTime = document.getElementById('prefTime').value;

  if (!hours || !days || !goal || !prefTime) {
    alert('Please fill in all four fields before generating your schedule.');
    return;
  }

  var selectedDays = DAYS_OF_WEEK.slice(0, days);
  var timeSlots    = TIME_SLOTS[prefTime];
  var focusList    = FOCUS_TOPICS[goal];
  var slotClass    = SLOT_CLASSES[prefTime];
  var sessionLabel = { morning:'Morning', afternoon:'Afternoon', evening:'Evening', night:'Night' }[prefTime];

  // Stats
  document.getElementById('scheduleStats').innerHTML =
    '<div class="stat-pill">Weekly study: <strong>' + (hours * days) + 'h</strong></div>' +
    '<div class="stat-pill">Active days: <strong>' + days + '/week</strong></div>' +
    '<div class="stat-pill">Total sessions: <strong>' + (days * hours) + '</strong></div>';

  // Build table rows
  var tbody = document.getElementById('scheduleBody');
  tbody.innerHTML = '';

  for (var di = 0; di < selectedDays.length; di++) {
    var day = selectedDays[di];

    for (var h = 0; h < hours; h++) {
      var timeSlot   = timeSlots[h] ? timeSlots[h] : 'Session ' + (h + 1);
      var focusTopic = focusList[(di * hours + h) % focusList.length];
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><strong>' + day + '</strong></td>' +
        '<td>' + timeSlot + '</td>' +
        '<td>' + sessionLabel + ' Session ' + (h + 1) + '</td>' +
        '<td>60 min</td>' +
        '<td><span class="slot-badge ' + slotClass + '">' + focusTopic + '</span></td>';
      tbody.appendChild(tr);
    }

    // Daily review row
    var reviewTr = document.createElement('tr');
    reviewTr.innerHTML =
      '<td><strong>' + day + '</strong></td>' +
      '<td>End of day</td>' +
      '<td>Daily Review</td>' +
      '<td>15 min</td>' +
      '<td><span class="slot-badge slot-review">Review &amp; Recap</span></td>';
    tbody.appendChild(reviewTr);
  }

  // Tips
  var tipsList = TIPS[goal];
  var tipsHtml = '';
  for (var t = 0; t < tipsList.length; t++) {
    tipsHtml += '<li>' + tipsList[t] + '</li>';
  }
  document.getElementById('studyTips').innerHTML = tipsHtml;

  // Show output — set display directly, no CSS class dependency
  var output = document.getElementById('scheduleOutput');
  output.style.display = 'block';
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetSchedule() {
  document.getElementById('scheduleOutput').style.display = 'none';
  var selects = document.querySelectorAll('.styled-select');
  for (var i = 0; i < selects.length; i++) {
    selects[i].value = '';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
