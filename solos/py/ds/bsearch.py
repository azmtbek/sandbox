import bisect


def search(self, nums: list[int], target: int) -> int:
    lo, hi = 0, len(nums) - 1

    while lo < hi:
        m = (lo + hi) // 2
        if target <= nums[m]:
            hi = m
        else:
            lo = m + 1

    if nums[lo] == target:
        return lo
    return -1


def search2(self, nums: list[int], target: int) -> int:
    # Find the insertion position `idx`.
    idx = bisect.bisect_right(nums, target)

    if idx > 0 and nums[idx - 1] == target:
        return idx - 1

    return -1
