import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAB from "../../components/FAB";
import { Accordion } from "flowbite-react";

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <FAB />
            <section className="h-auto w-screen flex items-center flex-col">
                <h1 className="text-3xl font-roboto mb-14 font-medium text-[#444341] mt-32 uppercase">
                    Faq
                </h1>
                <div className="w-80 md:w-[40rem] font-roboto">
                    <Accordion collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title>How to order?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    You can find Shellasaukia Skin products at
                                    our marketplace Shopee : ssskinid, TikTok
                                    Shop: ssskin.id, Tokopedia: SSSKIN.ID or you
                                    can contact +62818788348 on Whatsapp. Visit
                                    our website www.shellasaukiaskin.com.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                How to order via website?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    You can visit and choose product, follow the
                                    steps at{" "}
                                    <a
                                        href="https://ssgroup.id"
                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        www.ssgroup.id
                                    </a>
                                    . You can use your computer, laptop, or
                                    smartphone to access the website.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Does Shellasaukia Skin provide consulting
                                service?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    If you want to consult, contact us via
                                    SSSKIN official WhatsApp at +62 818788348 to
                                    connect directly with our Customer Service
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Can i see the pricelist os Shellasaukia Skin
                                products?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    You can click
                                    www.shellasaukiaskin.com/product to directly
                                    connected with our catalog. For more
                                    information on each package or product, you
                                    can contact +62818788348 via Whatsapp.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Do Shellasaukia Skin officially registered by
                                BPOM?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, all products of Shellasaukia Skin have
                                    been officially registered in BPOM. You can
                                    verify the BPOM number of each Shellasaukia
                                    Skin product.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Is Shellasaukia Skin product halal?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Yes, it is. Shellasaukia Skin only using
                                    natural ingredients and does not contains
                                    non-halal materials.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Is Shellasaukia Skin suitable fot sensitive skin
                                types?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The formula of Shellasaukia Skin was
                                    designed to suitable for all skin types,
                                    including sensitive skin.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Why my face become rough after used Shellasaukia
                                Skin for a week?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    There is a sign of detoxification. It can be
                                    considered as the adaptation process of the
                                    skin. Another reason, it may happen because
                                    you previously used a blended product
                                    containing heavy chemicals. Shellasaukia
                                    Skins formula will work to remove the
                                    chemicals that exist in your skin through
                                    detoxification. It normally takes place
                                    within 4-6 weeks to make your skin back to
                                    neutral.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                If my skin had been rough, is it safe to
                                continue using Shellasaukia Skin product?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    There is no problem to continue the use of
                                    SSSKIN in your face. With the use of SSSKIN
                                    regularly, skin adaptation will be faster,
                                    and the performance of SSSKIN formula will
                                    be increased.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Why there has been no change on my skin after
                                using SSSKIN product for one week?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The benchmark of the regeneration process
                                    does not always depend on 14- 28 day cycles.
                                    First, SSSKIN made with natural materials,
                                    so that the process will take time and
                                    growing naturally. Normally, SSSKIN will
                                    show the results after 6-8 weeks of usage.
                                    Second, it depends on your skin type. There
                                    is a skin type with a very fast skin cell
                                    regeneration process, but there is also a
                                    slower process. Thirdly, it depends on the
                                    severity of skin damage. The higher the
                                    severity, the longer the skin regeneration
                                    process. Fourth, it also depends on your
                                    habits in taking care of your skin, because
                                    healthy skin is always followed by a healthy
                                    lifestyle. The most important is, the
                                    naturals change will be yours if you taking
                                    care of your skin properly. Surely, there is
                                    always a big difference between treated-well
                                    skin with untreated skin
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Can Shellasaukia Skin be used with other beauty
                                products?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    SSSKIN can be used in conjunction with other
                                    beauty products because SSSKINis more
                                    flexible. However, we do not recommend you
                                    combine SSSKIN with a "heavy-chemical" blend
                                    product. For maximum results, we recommend
                                    you to use the full treatment of SSSKIN
                                    products.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Faq;
