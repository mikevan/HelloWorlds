"""The villain.

pick_greeting() works, mostly, but nobody wrote a test for it and it is
nested five levels deep. This is the function DeepTest should put at the
top of its report, and the one UntangleIt should be pointed at afterwards.
"""


def pick_greeting(hour: int, name: str, lang: str = "en", formal: bool = False, mood: str = "ok") -> str:
    """Choose a greeting based on the time of day, language, formality, and mood."""
    if lang == "en":
        return _pick_english_greeting(hour, name, formal, mood)
    elif lang == "es":
        if hour < 12:
            if formal:
                return f"Buenos dias, {name}."
            else:
                return f"Buenas, {name}!"
        elif hour < 20:
            if formal and mood != "bad":
                return f"Buenas tardes, {name}."
            elif formal:
                return f"Buenas tardes, {name}. Animo."
            else:
                return f"Buenas, {name}!"
        else:
            return f"Buenas noches, {name}."
    elif lang == "fr":
        if hour < 18:
            if formal:
                return f"Bonjour, {name}."
            else:
                return f"Salut, {name}!"
        else:
            return f"Bonsoir, {name}."
    else:
        if formal:
            return f"Hello, {name}."
        else:
            return f"Hello, {name}!"


def _pick_english_greeting(hour: int, name: str, formal: bool, mood: str) -> str:
    if hour < 12:
        return _pick_english_morning_greeting(name, formal, mood)
    elif hour < 18:
        return _pick_english_afternoon_greeting(name, formal, mood)
    else:
        if formal:
            return f"Good evening, {name}."
        else:
            if mood == "bad":
                return f"Evening, {name}. Long day?"
            else:
                return f"Evening, {name}!"


def _pick_english_afternoon_greeting(name: str, formal: bool, mood: str) -> str:
    if formal:
        return _pick_formal_english_afternoon_greeting(name, mood)
    else:
        if mood == "great" or mood == "ok":
            return f"Hey {name}!"
        else:
            return f"Hey {name}. Hang in there."


def _pick_formal_english_afternoon_greeting(name: str, mood: str) -> str:
    if mood == "great":
        return f"Good afternoon, {name}. Splendid."
    elif mood == "bad":
        return f"Good afternoon, {name}. Chin up."
    else:
        return f"Good afternoon, {name}."


def _pick_english_morning_greeting(name: str, formal: bool, mood: str) -> str:
    if formal:
        return _pick_formal_english_morning_greeting(name, mood)
    else:
        if mood == "great":
            return f"Morning, {name}! Feeling good?"
        elif mood == "bad":
            return f"Morning, {name}. Rough one?"
        else:
            return f"Morning, {name}!"


def _pick_formal_english_morning_greeting(name: str, mood: str) -> str:
    if mood == "great":
        return f"Good morning, {name}. What a fine day."
    elif mood == "bad":
        return f"Good morning, {name}. I hope it improves."
    else:
        return f"Good morning, {name}."
