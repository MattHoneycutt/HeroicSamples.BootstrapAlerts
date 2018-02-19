# Heroic Bootstrap Alerts Sample
This sample shows one technique of combining Bootstrap Alerts with ASP.NET Core. You can read more about the technique at <a target="_blank" href="https://trycatchfail.com">try-catch-FAIL</a>.

## Examples

You can show an alert off a view result like so:

```cs
public IActionResult About()
{
    ViewData["Message"] = "Your application description page.";

    return View().WithSuccess("It worked!", "You were able to view the about page, congrats!");
}
```

You can also show an alert off a redirect result:

```cs
public IActionResult GoHome()
{
    return RedirectToAction("Index").WithWarning("You were redirected!", "The action you hit has bounced you back to Index!");
}
```

API results are supported, too:

```cs
public IActionResult Success()
{
    return Ok(DateTime.UtcNow.ToString()).WithSuccess("Success!", "The API call worked!");
}
```