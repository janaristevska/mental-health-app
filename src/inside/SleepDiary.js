import React, { useState } from 'react';
import { format } from 'date-fns';
import '../styles/SleepDiary.css';

function SleepTips() {
    const [sleepLog, setSleepLog] = useState([]);
    const [newEntry, setNewEntry] = useState({
        bedtime: '',
        bedtimeAMPM: 'AM',
        wakeTime: '',
        wakeTimeAMPM: 'AM',
        sleepQuality: '',
    });
    const [inputError, setInputError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'sleepQuality') {
            if (/^-?\d*$/.test(value) && (value === '' || (parseInt(value, 10) >= -10 && parseInt(value, 10) <= 10))) {
                setNewEntry({
                    ...newEntry,
                    [name]: value,
                });
                setInputError('');
            } else {
                setInputError('Sleep Quality must be a number between 0 and 10.');
            }
        } else if (name === 'bedtime' || name === 'wakeTime' || name === 'bedtimeAMPM' || name === 'wakeTimeAMPM') {
            let formattedValue = value;

            if (name === 'bedtime' || name === 'wakeTime') {
                if (/^-?\d{2}$/.test(value)) {
                    const hour = parseInt(value, 10);
                    if ((hour >= -12 && hour <= -1) || (hour >= 1 && hour <= 12)) {
                        formattedValue = `${value.replace('-', '').padStart(2, '0')}:`;
                        setNewEntry({
                            ...newEntry,
                            [`${name}AMPM`]: 'AM',
                        });
                        setInputError('');
                    } else {
                        setInputError('Entered an invalid time!');
                    }
                } else if (/^(0[1-9]|1[0-2]):[0-5][0-9]$/.test(value) && ((value >= '-12:00' && value <= '-01:00') || (value >= '01:00' && value <= '12:00'))) {
                    formattedValue = value;
                    setInputError('');
                } else {
                    setInputError('Entered an invalid time!');
                }
            }

            setNewEntry({
                ...newEntry,
                [name]: formattedValue,
            });
        } else {
            setNewEntry({
                ...newEntry,
                [name]: value,
            });
        }
    };

    const addSleepEntry = () => {
        if (
            inputError === '' &&
            newEntry.bedtime !== '00:00' &&
            newEntry.wakeTime !== '00:00' &&
            newEntry.bedtime !== '' &&
            newEntry.wakeTime !== '' &&
            newEntry.sleepQuality !== ''
        ) {
            const currentDate = format(new Date(), 'yyyy-MM-dd');
            const existingEntryIndex = sleepLog.findIndex((entry) => entry.date === currentDate);

            if (existingEntryIndex !== -1) {
                const updatedSleepLog = [...sleepLog];
                updatedSleepLog[existingEntryIndex] = {
                    date: currentDate,
                    bedtime: newEntry.bedtime,
                    bedtimeAMPM: newEntry.bedtimeAMPM,
                    wakeTime: newEntry.wakeTime,
                    wakeTimeAMPM: newEntry.wakeTimeAMPM,
                    sleepQuality: newEntry.sleepQuality,
                };
                setSleepLog(updatedSleepLog);
            } else {
                setSleepLog([
                    ...sleepLog,
                    {
                        date: currentDate,
                        bedtime: newEntry.bedtime,
                        bedtimeAMPM: newEntry.bedtimeAMPM,
                        wakeTime: newEntry.wakeTime,
                        wakeTimeAMPM: newEntry.wakeTimeAMPM,
                        sleepQuality: newEntry.sleepQuality,
                    },
                ]);
            }

            setNewEntry({
                bedtime: '',
                bedtimeAMPM: 'AM',
                wakeTime: '',
                wakeTimeAMPM: 'AM',
                sleepQuality: '',
            });
        }
    };

    const handleKeyPress = (event) => {
        if (
            event.key === 'Enter' &&
            !isLogSleepButtonDisabled() &&
            newEntry.bedtime &&
            newEntry.wakeTime &&
            newEntry.sleepQuality
        ) {
            addSleepEntry();
        }
    };

    const isLogSleepButtonDisabled = () => {
        return (
            inputError !== '' ||
            !isValidTime(newEntry.bedtime) ||
            !isValidTime(newEntry.wakeTime) ||
            newEntry.sleepQuality === ''
        );
    };

    const isValidTime = (timeString) => {
        if (!timeString) {
            return true;
        }

        const [hours, minutes] = timeString.split(':').map(Number);

        return hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59;
    };

    return (
        <div className='sleep-diary-container'>

            <p className='diary-title'>Sleep Diary</p>
            <p className='diary-wlc'>Welcome to the Sleep Diary!</p>
            <div className='diary-wlc2'>
                This sleep diary is your personal tool to track and improve your sleep patterns. We believe that understanding your sleep habits is essential for maintaining overall well-being.<br></br>

                <span style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>How the Sleep Diary works:</span> <br></br>

                Bedtime: Record the time you go to bed each night.<br></br>

                Wake Time: Log the time you wake up in the morning. This information provides insights into the duration of your sleep.<br></br>

                Sleep Quality: Rate the quality of your sleep on a scale of 0 to 10. This subjective rating helps you assess the restfulness of your sleep.<br></br>

                Regularly logging your sleep data can reveal patterns and trends that may affect your sleep quality. It's a step toward improving your sleep and overall health.
            </div>
            <div className="sleep-diary">
                <div className="input-container">
                    <div className="input-group">
                        <div className="bedtime-input-group">
                            <input
                                type="text"
                                name="bedtime"
                                placeholder="Bedtime (e.g., 10:00)"
                                value={newEntry.bedtime}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                style={{ width: '800px' }}
                                className="placeholder-color"
                            />
                            <select
                                name="bedtimeAMPM"
                                value={newEntry.bedtimeAMPM}
                                onChange={handleInputChange}
                                style={{ width: '200px', color: 'rgb(36, 35, 35)' }}
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="waketime-input-group">
                            <input
                                type="text"
                                name="wakeTime"
                                placeholder="Wake Time (e.g., 06:00)"
                                value={newEntry.wakeTime}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                style={{ width: '800px', color: 'rgb(36, 35, 35)' }}
                                className="placeholder-color"
                            />
                            <select
                                name="wakeTimeAMPM"
                                value={newEntry.wakeTimeAMPM}
                                onChange={handleInputChange}
                                style={{ width: '200px', color: 'rgb(36, 35, 35)' }}
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="sleepQuality"
                            placeholder="Sleep Quality (0-10)"
                            value={newEntry.sleepQuality}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            className="placeholder-color"
                        />
                        <button
                            onClick={addSleepEntry}
                            disabled={isLogSleepButtonDisabled()}
                        >
                            Log Sleep
                        </button>
                    </div>
                    {inputError && <p className="error-message">{inputError}</p>}
                </div>
                <div>
                    <h3>Your Sleep Log</h3>
                    <ul className="sleep-log">
                        {sleepLog.map((entry, index) => (
                            <li key={index}>
                                Date: {entry.date} | Bedtime: {entry.bedtime} {entry.bedtimeAMPM} | Wake Time: {entry.wakeTime} {entry.wakeTimeAMPM} | Quality: {entry.sleepQuality}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SleepTips;
