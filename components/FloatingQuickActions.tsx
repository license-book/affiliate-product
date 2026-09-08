"use client";

import { useEffect, useRef, useState } from "react";

function ShareLineIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="floatingIcon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.5-4.5M8.2 13.2l7.5 4.5" />
    </svg>
  );
}

function LinkLineIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="floatingLinkIcon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2A5 5 0 0 0 12 4l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </svg>
  );
}

function ArrowUpLineIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="floatingIcon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 10 6-6 6 6" />
      <path d="M12 4v16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="floatingCloseIcon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 5l10 10M15 5 5 15" />
    </svg>
  );
}

export default function FloatingQuickActions() {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shareOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShareOpen(false);
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setShareOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [shareOpen]);

  const moveTop = () => {
    setShareOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getShareData = () => {
    const url = window.location.href;
    const rawTitle = document.querySelector("h1")?.textContent?.trim() || document.title || "PICKLY";
    const title = rawTitle.includes("PICKLY") ? rawTitle : `${rawTitle} | PICKLY`;
    return { url, title, text: title };
  };

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer,width=720,height=640");
    setShareOpen(false);
  };

  const copyCurrentLink = async (closeAfter = false) => {
    const { url } = getShareData();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);
    if (closeAfter) window.setTimeout(() => setShareOpen(false), 900);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const shareKakao = async () => {
    const shareData = getShareData();
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareOpen(false);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyCurrentLink();
    window.alert("현재 기기에서는 카카오톡 직접 공유창을 열 수 없어 링크를 복사했습니다. 카카오톡에서 붙여넣어 공유해 주세요.");
  };

  const shareNaverBlog = () => {
    const { url, title } = getShareData();
    openShareWindow(`https://share.naver.com/web/shareView?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`);
  };

  const shareX = () => {
    const { url, text } = getShareData();
    openShareWindow(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
  };

  const shareFacebook = () => {
    const { url } = getShareData();
    openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  return (
    <div className="floatingActions">
      <div ref={shareRef} className="floatingShareWrap">
        {shareOpen ? (
          <div role="dialog" aria-label="현재 페이지 공유하기" className="floatingShareMenu">
            <div className="floatingShareHead">
              <p>공유하기</p>
              <button type="button" onClick={() => setShareOpen(false)} aria-label="공유 메뉴 닫기" className="floatingCloseButton">
                <CloseIcon />
              </button>
            </div>

            <button type="button" onClick={shareKakao} className="floatingShareItem floatingKakao">
              <span className="floatingServiceIcon serviceK">K</span><span>카카오톡</span>
            </button>
            <button type="button" onClick={shareNaverBlog} className="floatingShareItem floatingNaver">
              <span className="floatingServiceIcon serviceN">N</span><span>네이버 블로그</span>
            </button>
            <button type="button" onClick={shareX} className="floatingShareItem">
              <span className="floatingServiceIcon serviceX">X</span><span>X</span>
            </button>
            <button type="button" onClick={shareFacebook} className="floatingShareItem floatingFacebook">
              <span className="floatingServiceIcon serviceF">f</span><span>페이스북</span>
            </button>
            <div className="floatingDivider" />
            <button type="button" onClick={() => copyCurrentLink(true)} className="floatingShareItem">
              <span className="floatingServiceIcon serviceLink"><LinkLineIcon /></span><span>{copied ? "링크 복사됨" : "링크 복사"}</span>
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setShareOpen((value) => !value)}
          aria-haspopup="dialog"
          aria-expanded={shareOpen}
          aria-label="현재 페이지 공유하기"
          className="floatingShareButton"
        >
          <ShareLineIcon />
          <span>공유하기</span>
        </button>
      </div>

      <button type="button" onClick={moveTop} aria-label="페이지 상단으로 이동" className="floatingTopButton">
        <ArrowUpLineIcon />
      </button>
    </div>
  );
}
